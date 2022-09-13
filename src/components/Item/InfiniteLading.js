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

  useEffect(() => {
    const body = {
      page: page,
      limit: limit,
    };
    getData(body);
    console.log(body);
  }, []);

  const getData = async body => {
    tweetAPI
      .getAllTwit(body.page)
      .then(res => {
        if (body.loadMore) setListTweet([...listTweet, ...res.data.data]);
        else setListTweet(res.data.data);
        console.log(res);
      })
      .catch(err => alert("글을 가져오는데 실패 했습니다."));
  };

  const fetchMoreData = async () => {
    setFetching(true);
    let tmpPage = page + 1;
    let body = {
      page: tmpPage,
      limit: limit,
      loadMore: true,
    };
    console.log(body);
    setPage(tmpPage);
    getData(body);

    setFetching(false);
  };

  //   const { data } = useQuery(["getTweets", page], getData(body), {
  //     staleTime: 0,
  //     keepPreviousData: true,
  //   });
  //   const tweets = data?.data.data;

  return (
    <Infinite
      tweets={listTweet}
      fetchMoreData={fetchMoreData}
      fetching={fetching}
    />
  );
};

export default InfiniteLanding;
