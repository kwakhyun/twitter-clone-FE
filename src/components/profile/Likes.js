import React from "react";
import { useQuery } from "react-query";
import { tweetAPI } from "../../shared/api";
import Item from "../Item/Item";

const Likes = ({ memberId }) => {
  const { data, isLoading, isError } = useQuery(
    "getLikeTweets",
    async () => await tweetAPI.getLikeTiwt(memberId)
  );
  console.log(data);
  const likeTweets = data?.data.data;
  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {likeTweets.map((tweet) => {
        return (
          <div key={tweet.createAt}>
            <Item tweet={tweet} />
          </div>
        );
      })}
    </div>
  );
};

export default Likes;
