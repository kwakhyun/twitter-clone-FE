import axios from "axios";
import { getRefreshToken, getAccessToken } from "./storage";

export const api = axios.create({
  baseURL: "http://15.164.229.25/api/auth",
  withCredentials: true,
});

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
  otherProfile: user_id => api.get(`/member/profile/${user_id}`),
  modify: data => api.put("/member/profile", data),
};

export const tweetAPI = {
  getAllTwit: page => api.get(`/twit?page=${page}&size=${10}`),
  getDetailTwit: twitid => api.get(`/twit/${twitid}`),
  getParentTwit: twitid => api.get(`/twit/${twitid}/parent`),

  getMyTwit: () => api.get(`/mytwit`),
  getLikeTiwt: member_id => api.get(`/likepage/${member_id}`),
  getOtherTwit: member_id => api.get(`/mytwit/${member_id}`),

  addTwit: data => api.post(`/twit`, data),
  deleteTwit: twitid => api.delete(`/twit/${twitid}`),
};

export const replyAPI = {
  addReply: data => api.post(`/comment/${data.id}`, data.data),
};

export const likeAPI = {
  toggleLike: id => api.post(`/twitlike/${id}`),
};

export const followAPI = {
  toggleFollow: memberid => api.post(`/follow/${memberid}`),
};

export const retweetAPI = {
  getReTwit: twitid => api.post(`/retwit/${twitid}`),
};
