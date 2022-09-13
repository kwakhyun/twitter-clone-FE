import React, { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";

const Infinite = ({ tweets, fetching, fetchMoreData }) => {
  const [tweetInfo, setPostInfo] = useState([]);

  useEffect(() => {
    setPostInfo(tweets);
  }, [tweets]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log(scrollHeight, scrollTop, clientHeight);
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
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
        tweetInfo.map((post, idx) => <Item key={idx} tweet={post} />)}
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
