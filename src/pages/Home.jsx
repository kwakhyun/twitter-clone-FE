import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer, Item, AddButton } from "../components";
import { useInfiniteQueryScroll } from "../hooks/useInfiniteQueryScroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/first");
    }
  }, [navigate]);

  const { data, isSuccess, hasNextPage, fetchNextPage } =
    useInfiniteQueryScroll();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <Header />
      <div>
        {isSuccess && data.pages
          ? data.pages.map((page, pageIndex) => {
              const tweets = page.tweets;
              return tweets.map((tweet, tweetIndex) => {
                if (
                  data.pages.length === pageIndex + 1 &&
                  tweets.length === tweetIndex + 1
                ) {
                  return (
                    <div ref={ref} key={tweet.id}>
                      <Item tweet={tweet} />
                    </div>
                  );
                } else {
                  return <Item key={tweet.id} tweet={tweet} />;
                }
              });
            })
          : null}
      </div>
      <AddButton />
      <Footer />
    </>
  );
};

export default Home;
