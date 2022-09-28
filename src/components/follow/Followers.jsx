import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { followAPI } from "../../shared/api";
import { Modal } from "../index";
import { StyledModal } from "../profile/OtherProfile";
import styled from "styled-components";

const Followers = ({ memberId }) => {
  const navigate = useNavigate();
  const [unfollowUserId, setUnfollowUserId] = useState("");
  const [unfollowMemberId, setUnfollowMemberId] = useState("");
  const [unfollowModal, setUnfollowModal] = useState(false);

  const { data, isLoading, isError } = useQuery("getFollowers", () =>
    followAPI.getFollowers(memberId)
  );
  const followers = data?.data.data;

  const queryClient = useQueryClient();
  const { mutate } = useMutation(followAPI.toggleFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries("getFollowers");
    },
  });

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {followers?.map((user) => {
        return (
          <StyledUserDiv key={user.userId}>
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="img"
                onClick={() => navigate(`/profile/${user.userId}`)}
              />
            ) : (
              <img
                src="https://twitterclone-bucket.s3.ap-northeast-2.amazonaws.com/dafault/twitterBasicImage.jpg"
                alt="img"
                onClick={() => navigate(`/profile/${user.userId}`)}
              />
            )}
            <div className="span-div">
              <span className="nickname">{user.nickname}</span>
              <span className="user-id">@{user.userId}</span>
            </div>
            {user.following ? (
              <button
                className="unfollow-btn"
                onClick={() => {
                  setUnfollowUserId(user.userId);
                  setUnfollowMemberId(user.memberId);
                  setUnfollowModal(true);
                }}
              >
                following
              </button>
            ) : (
              <button
                className="follow-btn"
                onClick={() => {
                  mutate(user.memberId);
                }}
              >
                follow
              </button>
            )}
            {unfollowModal && (
              <Modal closeModal={() => setUnfollowModal(false)}>
                <StyledModal>
                  <span>Unfollow @{unfollowUserId}</span>
                  <p>
                    Their Tweets will no longer show up in your home timeline.
                    You can still view their profile, unless their Tweets are
                    protected.
                  </p>
                  <button
                    onClick={() => {
                      mutate(unfollowMemberId);
                      setUnfollowModal(false);
                    }}
                  >
                    Unfollow
                  </button>
                </StyledModal>
              </Modal>
            )}
          </StyledUserDiv>
        );
      })}
    </div>
  );
};

export const StyledUserDiv = styled.div`
  display: flex;
  padding: 11px 15px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .span-div {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    font-size: 14px;
    .nickname {
      font-weight: bold;
    }
    .user-id {
      color: #8e8e8e;
    }
  }
  .follow-btn {
    margin-left: auto;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #000;
    background-color: #000;
    color: white;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  .unfollow-btn {
    margin-left: auto;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;

export default Followers;
