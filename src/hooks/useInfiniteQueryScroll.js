import { useInfiniteQuery } from "react-query";
import { tweetAPI } from "../shared/api";

export const useInfiniteQueryScroll = () => {
  const getTweetPage = async ({ pageParam = 0 }) => {
    const { data } = await tweetAPI.getAllTwit(pageParam);
    return {
      tweets: data?.data,
      nextPage: pageParam + 1,
      isLast: data?.data.length < 10,
    };
  };

  const { data, isSuccess, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(["getTweetPage"], getTweetPage, {
      getNextPageParam: ({ nextPage, isLast }) => {
        return isLast ? false : nextPage;
      },
      refetchOnWindowFocus: false,
    });

  return {
    data,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};
