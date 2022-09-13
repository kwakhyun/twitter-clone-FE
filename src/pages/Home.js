import React from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { AddButton, Header, Footer, Item } from "../components";
import { tweetAPI } from "../shared/api";

const Mainpage = () => {
  const { data } = useQuery("getTweets", tweetAPI.getAllTwit, {
    staleTime: 0,
    keepPreviousData: true,
  });
  const tweets = data?.data.data;

  return (
    <>
      <Header />
      <StyledItemContainer>
        {tweets?.map((tweet) => {
          return (
            <div key={tweet.id}>
              <Item tweet={tweet} />
            </div>
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
