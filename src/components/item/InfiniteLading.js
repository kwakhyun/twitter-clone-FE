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

  const getTweets = async page => {
    const res = await tweetAPI.getAllTwit(page);
    let reslist = res?.data.data;
    for (let i = 0; i < reslist?.length; i++) {
      reslist[i] = { ...reslist[i], page: page };
    }
    setListTweet([...listTweet, ...reslist]);

    return res;
  };

  const { data, isLoading } = useQuery(
    ["getTweets", page],
    () => getTweets(page),
    {
      staleTime: 0,
      retry: 1,
      keepPreviousData: true,
    }
  );
  if (isLoading) return;
  // console.log(data);
  // if (isSuccess) {
  //   setListTweet([...listTweet, ...data.data.data]);
  // }
  // const tweets = data?.data.data;
  // useEffect(() => {
  //   setListTweet([...listTweet, ...data?.data.data]);
  // }, []);

  // useEffect(() => {
  //   const body = {
  //     page: page,
  //     limit: limit,
  //   };
  //   // getData(body);
  //   // console.log(body);
  // }, []);

  // const getData = async body => {
  //   tweetAPI
  //     .getAllTwit(body.page)
  //     .then(res => {
  //       console.log(res.data.data);
  //       setListTweet([...listTweet, ...res.data.data]);
  //     })
  //     .catch(err => alert("글을 가져오는데 실패 했습니다."));
  // };

  const fetchMoreData = async () => {
    setFetching(true);
    let tmpPage = page + 1;
    // let body = {
    //   page: tmpPage,
    //   limit: limit,
    // };
    // console.log(body);
    setPage(tmpPage);
    // getData(body);

    setFetching(false);
  };

  return (
    <Infinite
      listTweet={listTweet}
      fetchMoreData={fetchMoreData}
      fetching={fetching}
      setListTweet={setListTweet}
    />
  );
};

//   return (
//     <Infinite
//       listTweet={listTweet}
//       fetchMoreData={fetchMoreData}
//       fetching={fetching}
//       setListTweet={setListTweet}
//     />
//   );
// };

export default InfiniteLanding;
