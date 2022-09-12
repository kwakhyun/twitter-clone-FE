// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// export const setAccessToken = accessToken => {
//   const today = new Date();
//   const expireDate = today.setHours(today.getHours() + 2);
//   return cookies.set("access_token", accessToken, {
//     sameSite: "strict",
//     path: "/",
//     expires: new Date(expireDate),
//   });
// };

// export const setRefreshToken = refreshToken => {
//   const today = new Date();
//   const expireDate = today.setDate(today.getDate() + 7);
//   return cookies.set("refresh_token", refreshToken, {
//     sameSite: "strict",
//     path: "/",
//     expires: new Date(expireDate),
//   });
// };

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};
export const removeAccessToken = () => {
  return localStorage.removeItem("access_token");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const removeRefreshToken = () => {
  return localStorage.removeItem("refresh_token");
};
