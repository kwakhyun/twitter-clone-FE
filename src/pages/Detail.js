import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { tweetAPI } from "../shared/api";
import DetailHeader from "../components/header/DetailHeader";
import Reply from "../detail/Reply";
import Content from "../detail/Content";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(
    ["getDetail", id],
    () => tweetAPI.getDetailTwit(id),
    {
      refetchOnWindowFocus: false,
    }
  );
  const detailData = data?.data.data;

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <DetailHeader />
      <Content detail={detailData} />
      <Reply detail={detailData} />
    </>
  );
};

export default Detail;
