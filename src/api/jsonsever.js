import axios from "axios";

const BASE_URL = "http://localhost:5001";
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Comment-Type": "multipart/form-data",
  },
  withCredentials: true,
});

axios.interceptors.request.use(
  function (config) {},
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
  login: data => api.post("/login", data),
  singup: data => api.post(`/signup`, data),
  logout: () => api.get("/logout"),
};

export const ProflieAPI = {
  myprofile: () => api.get("/profile"),
  otherprofile: id => api.get(`/profile/${id}`),
  modify: data => api.put("/profile", data),
};

export const TwitAPI = {
  addtwit: data => api.post(`/twit`, data),
  gettwit: () => api.get(`/twit`),
  getonetwit: id => api.get(`/twit/${id}`),
  deletetwit: id => api.delete(`/twit/${id}`),
};

export const CommentAPI = {
  addcomment: data => api.post(`/comment`, data),
  deletecomment: id => api.delete(`/comment/${id}`),
};

export const LikeAPI = {
  togglelike: data => api.post(`/like/${data.id}`),
  
};
