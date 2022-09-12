import React from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { AddButton, Header, Footer, Item } from "../components";
import { tweetAPI } from "../shared/api";
import axios from "axios";

const Mainpage = () => {
  const getTweets = async () => {
    return await axios.get("http://13.125.250.180/api/auth/twit", {
      headers: {
        authorization: localStorage.getItem("access_token"),
        "refresh-Token": localStorage.getItem("refresh_token"),
      },
    });
    // return await tweetAPI.getAllTwit(); ??? 이거 왜 안될까요 태권님?!
  };

  const { data } = useQuery("getTweets", getTweets);
  const tweets = data?.data.data;

  // const { data, isLoading } = useQuery("twite", tweetAPI.getAllTwit {
  //   staleTime: 1000,
  //   keepPreviousData: true,
  // });

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  return (
    <>
      <Header />
      <StyledItemContainer>
        {tweets?.map((tweet) => {
          return (
            <React.Fragment key={tweet.id}>
              <Item tweet={tweet} />
            </React.Fragment>
          );
        })}
      </StyledItemContainer>
      <AddButton />
      <Footer />
    </>
  );
};

export default Mainpage;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 50px auto 50px auto;
`;
