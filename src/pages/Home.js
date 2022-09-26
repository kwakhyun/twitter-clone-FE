import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddButton,
  Header,
  Footer,
  Item,
  InfiniteLanding,
} from "../components";

const Mainpage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/first");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <InfiniteLanding />
      <AddButton />
      <Footer />
    </>
  );
};

export default Mainpage;
