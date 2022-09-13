import axios from "axios";
import { getRefreshToken, getAccessToken } from "./storage";

export const api = axios.create({
  baseURL: "http://15.164.229.25/api/auth",

  withCredentials: true,
});

export const instanceAdd = axios.create({
  baseURL: "http://15.164.229.25/api/auth",

  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

instanceAdd.interceptors.request.use(config => {
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  if (!accessToken || !refreshToken) {
    config.headers["authorization"] = null;
    config.headers["refresh-Token"] = null;
    return config;
  } else {
    config.headers["authorization"] = accessToken;
    config.headers["refresh-Token"] = refreshToken;
    return config;
  }
});

instanceAdd.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    return Promise.reject(error);
  }
);

api.interceptors.request.use(config => {
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  if (!accessToken || !refreshToken) {
    config.headers["authorization"] = null;
    config.headers["refresh-Token"] = null;
    return config;
  } else {
    config.headers["authorization"] = accessToken;
    config.headers["refresh-Token"] = refreshToken;
    return config;
  }
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    return Promise.reject(error);
  }
);

export const accountAPI = {
  logout: () => api.get("/member/logout"),
};

export const proflieAPI = {
  myProfile: () => api.get("/member/profile"),
  otherProfile: id => api.get(`/member/profile/${id}`),
  modify: data => api.put("/member/profile", data),
};

export const tweetAPI = {
  getAllTwit: page => api.get(`/twit?page=${page}&size=${10}`),
  getDetailTwit: twitid => api.get(`/twit/${twitid}`),
  getParentTwit: twitid => api.get(`/twit/${twitid}/parent`),

  getMyTwit: () => api.get(`/mytwit`),
  getLikeTiwt: () => api.get(`/likepage`),
  getOtherTwit: userid => api.get(`/mytwit/${userid}`),

  addTwit: data => instanceAdd.post(`/twit`, data),
  deleteTwit: twitid => api.delete(`/twit/${twitid}`),
};

export const replyAPI = {
  addReply: data => api.post(`/comment`, data),
  deleteReply: id => api.delete(`/comment/${id}`),
};

export const likeAPI = {
  toggleLike: id => api.post(`/twitlike/${id}`),
};

export const followAPI = {
  toggleFollow: userid => api.post(`/follow/${userid}`),
};

export const retweetAPI = {
  getReTwit: twitid => api.post(`/retwit/${twitid}`),
};
