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

export const getUserId = () => {
  return localStorage.getItem("user_id");
};

export const removeUserId = () => {
  return localStorage.removeItem("user_id");
};
