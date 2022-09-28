import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";

const Infinite = ({ tweetList, setTweetList, fetching, fetchMoreData }) => {
  const [tweetInfo, setPostInfo] = useState([]);

  useEffect(() => {
    setPostInfo(tweetList);
  }, [tweetList]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + 0.4 + clientHeight >= scrollHeight && fetching === false) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <StyledItemContainer>
      {tweetInfo &&
        tweetInfo.map((tweet, idx) => (
          <Item
            key={idx}
            tweet={tweet}
            tweetList={tweetList}
            setTweetList={setTweetList}
          />
        ))}
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 50px auto 50px auto;
`;

  export default Infinite;