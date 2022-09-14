import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import DetailHeader from "../components/Header/DetailHeader";
import Reply from "../detail/Reply";
import Content from "../detail/Content";
import { tweetAPI } from "../shared/api";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(
    "getDetail",
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
