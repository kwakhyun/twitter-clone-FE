import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileHeader from "../Header/ProfileHeader";
import Footer from "../Footer/Footer";
import AddButton from "../AddButton";
import styled from "styled-components";
import Tweets from "./Tweets";
import Likes from "./Likes";
import { BsCalendar3 } from "react-icons/bs";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { proflieAPI, tweetAPI, followAPI } from "../../shared/api";

const OtherProfile = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  const queryClient = useQueryClient();
  const toggleMutation = useMutation(followAPI.toggleFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries("getOtherProfile");
    },
  });

  const getOtherProfile = useQuery(
    "getOtherProfile",
    async () => await proflieAPI.otherProfile(params.userid)
  );
  const otherProfile = getOtherProfile.data?.data.data;
  const otherMemberId = otherProfile?.memberId;
  // console.log(otherProfile);
  const { data, isLoading, isError } = useQuery(
    ["getOtherTweets", otherMemberId],
    () => tweetAPI.getOtherTwit(otherMemberId)
  );
  const otherTweets = data?.data.data;

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  const tabArray = [
    {
      key: "tweets",
      tab: (
        <div
          className={tabIndex === 0 ? "select" : ""}
          onClick={() => setTabIndex(0)}
        >
          Tweets
        </div>
      ),
      content: <Tweets tweets={otherTweets} />,
    },
    {
      key: "likes",
      tab: (
        <div
          className={tabIndex === 1 ? "select" : ""}
          onClick={() => setTabIndex(1)}
        >
          Likes
        </div>
      ),
      content: <Likes memberId={otherMemberId} />,
    },
  ];

  return (
    <>
      <ProfileHeader profile={otherProfile} TweetCount={otherTweets.length} />
      <StyledContainer>
        {otherProfile?.backgroundImageUrl ? (
          <StyledBackImg src={otherProfile?.backgroundImageUrl} alt="img" />
        ) : (
          <StyledBackImg
            src="https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__480.jpg"
            alt="img"
          />
        )}

        <StyledProfileImg src={otherProfile?.imageUrl} />
        <StyledButton
          onClick={() => {
            toggleMutation.mutate(otherMemberId);
          }}
        >
          {/* {otherProfile?.follow ? Following : UnFollowing} */}
        </StyledButton>
        <StyledInfo>
          <h3>{otherProfile?.nickname}</h3>
          <span>@{otherProfile?.userId}</span>
          <p>{otherProfile?.bio}</p>
          <div className="join-date">
            <BsCalendar3 className="icon" />
            <div>Joined {otherProfile?.createdAt}</div>
          </div>
          <span className="follow">{otherProfile?.followingCnt} Following</span>
          <span className="follow">{otherProfile?.followerCnt} Followers</span>
        </StyledInfo>

        <StyledTabDiv>
          <StyledTab>
            {tabArray.map(item => {
              return (
                <div key={item.key} className="tab">
                  {item.tab}
                </div>
              );
            })}
          </StyledTab>
          {tabArray[tabIndex].content}
        </StyledTabDiv>
      </StyledContainer>
      <AddButton />
      <Footer />
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledBackImg = styled.img`
  width: 100%;
  height: 190px;
`;

const StyledProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 150px;
  left: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: white;
  font-weight: bold;
  position: absolute;
  top: 200px;
  right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #1da1f2;
    color: white;
  }
`;

const StyledInfo = styled.div`
  margin: 60px 0 0 15px;
  h3 {
    margin: 0;
  }
  span {
    color: #8e8e8e;
  }
  p {
    font-size: 14px;
  }
  .join-date {
    display: flex;
    color: gray;
    font-size: 16px;
    margin-bottom: 10px;
    .icon {
      padding: 3px 5px 0 0;
    }
  }
  .follow {
    color: #000;
    font-size: 14px;
    margin: 0 20px 0 0;
  }
`;

const StyledTabDiv = styled.div``;

const StyledTab = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  div {
    padding: 0 0 10px 0;
    margin: 10px 0 0 0;
  }
  .select {
    font-weight: bold;
    border-bottom: 3px solid #1d9bf0;
  }
`;

export default OtherProfile;
