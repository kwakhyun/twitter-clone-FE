import React from "react";
import { useQuery } from "react-query";
import Item from "../Item/Item";

const Tweets = () => {
  // const getTwit = async () => {
  //   const res = await TwitAPI.gettwit();
  //   return res;
  // };

  // const { data, isLoading } = useQuery("twite", () => getTwit(), {
  //   staleTime: 1000,
  //   keepPreviousData: true,
  // });

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  return (
    <div>
      {/* {data.data.map((x) => {
        return (
          <React.Fragment key={x.userId}>
            <Item twit={x} />
          </React.Fragment>
        );
      })} */}
    </div>
  );
};

export default Tweets;
