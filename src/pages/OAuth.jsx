import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const search = location.search;
  const params = new URLSearchParams(search);
  const isGoogle = true;

  localStorage.setItem("accessToken", params.get("Authorization"));
  localStorage.setItem("refreshToken", params.get("refresh-token"));
  localStorage.setItem("isGoogle", isGoogle);

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      navigate("/");
    }
  }, [accessToken, refreshToken, navigate]);

  // httpRequest.onreadystatechange = () => {
  //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     console.log(httpRequest.getResponseHeader("Authorization"));
  //     console.log(httpRequest.getResponseHeader("Refresh-Token"));
  //   }
  // };

  // httpRequest.open("GET", "http://localhost:3000/oauth");
  // httpRequest.send();
  
  return <h1>토큰 저장하는 중..</h1>;
};

export default OAuth;
