import React, { useState, useEffect } from "react";
import axios from "axios";
import Infinite from "./Infinite";
import { tweetAPI } from "../../shared/api";
import { useQuery } from "react-query";
const InfiniteLanding = () => {
  const [listTweet, setListTweet] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [fetching, setFetching] = useState(false);

  const getTweets = async body => {
    return await tweetAPI.getAllTwit(body.page);
  };

  //   const { data } = useQuery(["getTweets",page], getTweets(body), {
  //     staleTime: 0,
  //     keepPreviousData: true,
  //   });
  //   const tweets = data?.data.data;

  useEffect(() => {
    const body = {
      page: page,
      limit: limit,
    };
    getData(body);
  }, []);

  const getData = async body => {
    tweetAPI
      .getAllTwit(body.page)
      .then(res => {
        if (body.loadMore) setListTweet([...listTweet, ...res.data.data]);
        else setListTweet(res.data.data);
      })
      .catch(err => alert("글을 가져오는데 실패 했습니다."));
  };

  const fetchMoreData = () => {
    setFetching(true);
    let tmpPage = page + limit;
    let body = {
      page: tmpPage,
      limit: limit,
      loadMore: true,
    };

    getData(body);
    setPage(tmpPage);
    setFetching(false);
  };
  return (
    <Infinite
      tweets={listTweet}
      fetchMoreData={fetchMoreData}
      fetching={fetching}
    />
  );
};

export default InfiniteLanding;
