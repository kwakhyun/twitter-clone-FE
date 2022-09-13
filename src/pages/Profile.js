import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/Header/ProfileHeader";
import Footer from "../components/Footer/Footer";
import AddButton from "../components/AddButton";
import styled from "styled-components";
import Tweets from "../components/profile/Tweets";
import Likes from "../components/profile/Likes";
import { BsCalendar3 } from "react-icons/bs";
import { useQuery } from "react-query";
import { proflieAPI, tweetAPI } from "../shared/api";

const Profile = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  const getProfile = useQuery("getProfile", proflieAPI.myProfile);
  const profile = getProfile.data?.data.data;

  const { data, isLoading, isError } = useQuery(
    "getMyTweets",
    async () => await tweetAPI.getMyTwit()
  );
  const myTweets = data?.data.data;
  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;
  console.log(myTweets);

  const memberId = myTweets[0]?.memberId;
  console.log(memberId);

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
      content: <Tweets tweets={myTweets} />,
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
      content: <Likes memberId={memberId} />,
    },
  ];

  return (
    <>
      <ProfileHeader />
      <StyledContainer>
        {profile?.backgroundImageUrl ? (
          <StyledBackImg src={profile?.backgroundImageUrl} alt="img" />
        ) : (
          <StyledBackImg
            src="https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__480.jpg"
            alt="img"
          />
        )}

        <StyledProfileImg src={profile?.imageUrl} />
        <StyledButton
          onClick={() =>
            navigate("/editProfile", {
              state: {
                backgroundImageUrl: profile?.backgroundImageUrl,
                imageUrl: profile?.imageUrl,
                nickname: profile?.nickname,
                bio: profile?.bio,
                birthDate: profile?.dateOfBirth,
              },
            })
          }
        >
          Edit profile
        </StyledButton>
        <StyledInfo>
          <h3>{profile?.nickname}</h3>
          <span>@{profile?.userId}</span>
          <p>{profile?.bio}</p>
          <div className="join-date">
            <BsCalendar3 className="icon" />
            <div>Joined {profile?.createdAt}</div>
          </div>
          <span className="follow">0 Following</span>
          <span className="follow">0 Followers</span>
        </StyledInfo>

        <StyledTabDiv>
          <StyledTab>
            {tabArray.map((item) => {
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

export default Profile;
