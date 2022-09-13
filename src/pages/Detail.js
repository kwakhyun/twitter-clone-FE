import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import DetailHeader from "../components/Header/DetailHeader";
import Comment from "../detail/Comment";
import Content from "../detail/Content";
import { tweetAPI } from "../shared/api";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const getDetail = async (id) => {
    return await tweetAPI.getDetailTwit(id);
  };

  const { data } = useQuery("getDetail", getDetail(id));
  console.log(data);

  return (
    <>
      <DetailHeader />
      <Content />
      <Comment />
    </>
  );
};

export default Detail;
