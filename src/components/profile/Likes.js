import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { tweetAPI } from "../../shared/api";
import Item from "../item/Item";

const Likes = ({ memberId }) => {
  const { data, isLoading, isError } = useQuery(
    "getLikeTweets",
    async () => await tweetAPI.getLikeTiwt(memberId)
  );
  const likeTweets = data?.data.data;
  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledContainer length={likeTweets.length}>
      {likeTweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <Item tweet={tweet} />
          </div>
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: ${({ length }) => length * 100 + "px"};
`;

export default Likes;
