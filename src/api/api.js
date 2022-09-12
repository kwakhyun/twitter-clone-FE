import axios from "axios";
import { getRefreshToken, getAccessToken } from "./cookie";
const BASE_URL = "http://13.125.250.180";
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Comment-Type": "multipart/form-data",
  },
  withCredentials: true,
});

axios.interceptors.request.use(
  function (config) {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();
    config.headers["Authorization"] = `${accessToken}`;
    config.headers["Refresh-Token"] = `${refreshToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공

    return response;
  },
  function (error) {
    // 오류 응답을 처리

    return Promise.reject(error);
  }
);
export const AccountAPI = {
  login: data => api.post("/api/member/login", data),
  singup: data => api.post(`/api/member/signup`, data),
  logout: () => api.get("/api/auth/member/logout"),
};

export const ProflieAPI = {
  myProfile: () => api.get("/api/auth/member/profile"),
  otherProfile: id => api.get(`/api/auth/member/profile/${id}`),
  modify: data => api.put("/api/auth/member/profile", data),
};

export const TwitAPI = {
  addTwit: data => api.post(`/api/auth/twit`, data),
  getAllTwit: () => api.get(`/api/auth/twit`),
  getMyTwit: () => api.get(`/api/auth/mytwit`),
  getOtherTwit: userid => api.get(`/api/auth/mytwit/${userid}`),
  getDetailTwit: twitid => api.get(`/api/auth/twit/${twitid}`),
  getParentTwit: twitid => api.get(`/api/auth/twit/${twitid}/parent`),
  getLikeTiwt: () => api.get(`/api/auth/likepage`),
  deleteTwit: twitid => api.delete(`/api/auth/twit/${twitid}`),
};

export const CommentAPI = {
  addComment: (twitid, data) => api.post(`/api/auth/comment/${twitid}`, data),
  deleteComment: id => api.delete(`api/auth/comment/${id}`),
};

export const LikeAPI = {
  toggleLike: id => api.post(`/api/auth/twitlike/${id}`),
};

export const FollowAPI = {
  toggleFollow: userid => api.post(`/api/auth/follow/${userid}`),
};

export const ReTwit = {
  getReTwit: twitid => api.post(`/api/auth/retwit/${twitid}`),
};
