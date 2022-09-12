import axios from "axios";
import { getRefreshToken, getAccessToken } from "./storage";

export const api = axios.create({
  baseURL: "http://13.125.250.180/api",
  withCredentials: true,
});

api.interceptors.request.use(
  function (config) {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();

    if (!accessToken || !refreshToken) {
      config.headers["authorization"] = null;
      config.headers["refresh-Token"] = null;
    } else {
      config.headers["authorization"] = accessToken;
      config.headers["refresh-Token"] = refreshToken;
      return config;
    }
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

export const accountAPI = {
  login: (data) => api.post("/member/login", data),
  singup: (data) => api.post(`/member/signup`, data),
  logout: () => api.get("/auth/member/logout"),
};

export const proflieAPI = {
  myProfile: () => api.get("/auth/member/profile"),
  otherProfile: (id) => api.get(`/auth/member/profile/${id}`),
  modify: (data) => api.put("/auth/member/profile", data),
};

export const tweetAPI = {
  addTwit: (data) => api.post(`/auth/twit`, data),
  getAllTwit: () => api.get(`/auth/twit`),
  getMyTwit: () => api.get(`/auth/mytwit`),
  getOtherTwit: (userid) => api.get(`/auth/mytwit/${userid}`),
  getDetailTwit: (twitid) => api.get(`/auth/twit/${twitid}`),
  getParentTwit: (twitid) => api.get(`/auth/twit/${twitid}/parent`),
  getLikeTiwt: () => api.get(`/auth/likepage`),
  deleteTwit: (twitid) => api.delete(`/auth/twit/${twitid}`),
};

export const replyAPI = {
  addReply: (data) => api.post(`/auth/comment`, data),
  deleteReply: (id) => api.delete(`/auth/comment/${id}`),
};

export const likeAPI = {
  toggleLike: (id) => api.post(`/auth/twitlike/${id}`),
};

export const followAPI = {
  toggleFollow: (userid) => api.post(`/auth/follow/${userid}`),
};

export const retweetAPI = {
  getReTwit: (twitid) => api.post(`/auth/retwit/${twitid}`),
};
