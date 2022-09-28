import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileHeader from "../header/ProfileHeader";
import Footer from "../footer/Footer";
import AddButton from "../AddButton";
import styled, { css } from "styled-components";
import Tweets from "./Tweets";
import Likes from "./Likes";
import { BsCalendar3 } from "react-icons/bs";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { proflieAPI, tweetAPI, followAPI } from "../../shared/api";
import { Modal } from "../index";

const OtherProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);

  const getOtherProfile = useQuery(
    "getOtherProfile",
    async () => await proflieAPI.otherProfile(params.userid)
  );
  const otherProfile = getOtherProfile.data?.data.data;
  const otherMemberId = otherProfile?.memberId;

  const { data, isLoading, isError } = useQuery(
    ["getOtherTweets", otherMemberId],
    () => tweetAPI.getOtherTwit(otherMemberId)
  );
  const otherTweets = data?.data.data;
  const userId = otherProfile?.userId;

  // follow, unfollow
  const queryClient = useQueryClient();
  const { mutate } = useMutation(followAPI.toggleFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries("getOtherProfile");
    },
  });

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
            src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMjU4/MDAxNTIwMDQxODA4Mjc0.gR3L5xx3IbpACbvRRF9j9xjJmO-EPAY35oF1AdBnDcog.WZyeqFi6cMmH-v-R-ec44Ny6ZgVyAJIYMT78p4Rxbkwg.PNG.osy2201/2_%2850%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800"
            alt="default_background_image"
          />
        )}

        <StyledProfileImg src={otherProfile?.imageUrl} />
        {otherProfile?.following ? (
          <StyledButton
            following
            onClick={() => {
              setDeleteModal(true);
            }}
          >
            Following
          </StyledButton>
        ) : (
          <StyledButton
            follow
            onClick={() => {
              mutate(otherMemberId);
            }}
          >
            Follow
          </StyledButton>
        )}

        <StyledInfo>
          <h3>{otherProfile?.nickname}</h3>
          <span>@{userId}</span>
          <p>{otherProfile?.bio}</p>
          <div className="join-date">
            <BsCalendar3 className="icon" />
            <div>Joined {otherProfile?.createdAt}</div>
          </div>
          <span
            className="follow"
            onClick={() => navigate(`/follow/${userId}/following`)}
          >
            {otherProfile?.followingCnt} Following
          </span>
          <spans
            className="follow"
            onClick={() => navigate(`/follow/${userId}/followers`)}
          >
            {otherProfile?.followerCnt} Followers
          </spans>
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
      {deleteModal && (
        <Modal closeModal={() => setDeleteModal(!deleteModal)}>
          <StyledModal>
            <span>Unfollow @{otherProfile?.userId}</span>
            <p>
              Their Tweets will no longer show up in your home timeline. You can
              still view their profile, unless their Tweets are protected.
            </p>
            <button
              onClick={() => {
                mutate(otherMemberId);
                setDeleteModal(!deleteModal);
              }}
            >
              Unfollow
            </button>
          </StyledModal>
        </Modal>
      )}
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
  width: 90px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: white;
  font-weight: 600;
  position: absolute;
  top: 200px;
  right: 20px;
  cursor: pointer;
  transition: 0.3s;
  ${(props) =>
    props.following &&
    css`
      background-color: white;
      color: black;
      border: 1px solid rgb(150, 150, 150);
      font-size: 0.9rem;
      font-weight: 600;
      &:hover {
        background-color: rgb(250, 0, 0, 0.5);
        color: white;
        border: none;
      }
    `}
  ${(props) =>
    props.follow &&
    css`
      background-color: black;
      color: white;
      border: none;
      font-size: 1rem;
      &:hover {
        background-color: rgb(40, 40, 40);
        color: white;
      }
    `}
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

export const StyledModal = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
  p {
    font-size: 0.9rem;
    margin-top: 4px;
    margin-bottom: 20px;
  }
  button {
    border: 1px solid rgb(220, 220, 220);
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 12%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: black;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    transition: 0.3s;
    &:hover {
      background-color: rgb(40, 40, 40);
      cursor: pointer;
    }
  }
`;

export default OtherProfile;
