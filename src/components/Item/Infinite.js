import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";

const Infinite = ({ listTweet, fetching, fetchMoreData, setListTweet }) => {
  const [tweetInfo, setPostInfo] = useState([]);

  useEffect(() => {
    setPostInfo(listTweet);
  }, [listTweet]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    // console.log(scrollHeight, scrollTop, clientHeight);
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
        tweetInfo.map(post => (
          <Item
            key={post.id}
            tweet={post}
            setListTweet={setListTweet}
            listTweet={listTweet}
          />
        ))}
    </StyledItemContainer>
  );
};

export default Infinite;
const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 50px auto 50px auto;
`;
