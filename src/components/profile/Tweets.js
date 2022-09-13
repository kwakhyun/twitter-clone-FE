import React from "react";
import Item from "../Item/Item";

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <Item tweet={tweet} />
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
