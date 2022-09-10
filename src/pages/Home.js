import React from "react";
import styled from "styled-components";
import { TwitAPI } from "../api/jsonsever";
import { useQuery, useQueryClient } from "react-query";
import { Addbutton, Header, Footer, Item } from "../components";
const Mainpage = () => {
  const getTwit = async () => {
    const res = await TwitAPI.gettwit();

    return res;
  };
  const { data, isLoading } = useQuery("twite", () => getTwit(), {
    staleTime: 1000,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header />

      <StyledItemContainer>
        {data.data.map((x) => {
          return (
            <React.Fragment key={x.userId}>
              <Item twit={x} />
            </React.Fragment>
          );
        })}
      </StyledItemContainer>

      <Addbutton />
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
