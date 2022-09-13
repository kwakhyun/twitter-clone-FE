import React from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  AddButton,
  Header,
  Footer,
  Item,
  InfiniteLanding,
} from "../components";
import { tweetAPI } from "../shared/api";

const Mainpage = () => {
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
