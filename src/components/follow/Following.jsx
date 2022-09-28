import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { followAPI } from "../../shared/api";
import Modal from "../modal/Modal";
import { StyledUserDiv } from "./Followers";
import { StyledModal } from "../profile/OtherProfile";

const Following = ({ memberId }) => {
  const navigate = useNavigate();
  const [unfollowUserId, setUnfollowUserId] = useState("");
  const [unfollowMemberId, setUnfollowMemberId] = useState("");
  const [unfollowModal, setUnfollowModal] = useState(false);

  const { data, isLoading, isError } = useQuery("getFollowing", () =>
    followAPI.getFollowing(memberId)
  );
  const following = data?.data.data;

  const queryClient = useQueryClient();
  const { mutate } = useMutation(followAPI.toggleFollow, {
    onSuccess: () => {
      queryClient.invalidateQueries("getFollowing");
    },
  });

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {following?.map((user) => {
        return (
          <StyledUserDiv key={user.uesrId}>
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

export default Following;
