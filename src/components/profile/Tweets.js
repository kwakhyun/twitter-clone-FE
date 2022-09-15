import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";

const Tweets = ({ tweets }) => {
  return (
    <StyledTweets length={tweets?.length}>
      {tweets?.map((tweet) => {
        return (
          <div key={tweet.id}>
            <Item tweet={tweet} />
          </div>
        );
      })}
    </StyledTweets>
  );
};

const StyledTweets = styled.div`
  margin-bottom: ${({ length }) => length * 100 + "px"};
`;

export default Tweets;
