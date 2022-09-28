import React, { useState } from "react";
import Infinite from "./Infinite";
import { tweetAPI } from "../../shared/api";
import { useQuery } from "react-query";

const InfiniteLanding = () => {
  const [tweetList, setTweetList] = useState([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);

  const getTweets = useQuery(["getTweets", page], async () => {
    const response = await tweetAPI.getAllTwit(page);
    let responseList = response?.data.data;
    for (let i = 0; i < responseList?.length; i++) {
      responseList[i] = { ...responseList[i], page: page };
    }
    setTweetList([...tweetList, ...responseList]);
    return response;
  });

  const fetchMoreData = async () => {
    setFetching(true);
    let tmpPage = page + 1;

    setPage(tmpPage);
    setFetching(false);
  };

  return (
    <Infinite
      tweetList={tweetList}
      fetchMoreData={fetchMoreData}
      fetching={fetching}
      setTweetList={setTweetList}
    />
  );
};

export default InfiniteLanding;


