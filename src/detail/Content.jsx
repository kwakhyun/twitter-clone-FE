import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBoxArrowUp } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { likeAPI } from "../shared/api";

const Content = ({ detail }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const LikeMutate = useMutation(likeAPI.toggleLike, {
    onSuccess: () => {},
  });

  useEffect(() => {
    setLike(detail.like);
  }, [detail.like]);

  return (
    <StyledContainer>
      <StyledUserInfo>
        <img
          onClick={() => navigate(`/profile/${detail.userId}`)}
          src={detail?.userProfileImage}
          alt="profile"
        />
        <div>
          <h4>{detail?.nickname}</h4>
          <span>@{detail?.userId}</span>
        </div>
      </StyledUserInfo>

      <StyledContent>
        {detail?.content}
        {detail?.fileUrl && (
          <StyledContentImg src={detail?.fileUrl} alt="img" />
        )}
      </StyledContent>

      <div className="time">
        {/* <time>2:10 PM · Sep 10, 2022 · </time> */}
        <time>{detail?.createdAt} · </time>
        <span>Twitter Web App</span>
      </div>

      <StyledIconDiv>
        <div>
          <StyledIcon color="skyblue">
            <BiMessageRounded size="1.5rem" />
          </StyledIcon>
        </div>
        <div>
          <StyledIcon color="lightgreen">
            <AiOutlineRetweet size="1.5rem" />
          </StyledIcon>
        </div>
        <div>
          <StyledIcon
            color="lightpink"
            onClick={() => {
              setLike(!like);
              LikeMutate.mutate(detail.twitId);
            }}
          >
            {like ? (
              <IoHeart color="red" size="1.5rem" />
            ) : (
              <IoHeartOutline color="red" size="1.5rem" />
            )}
          </StyledIcon>
        </div>
        <div>
          <StyledIcon color="skyblue">
            <BsBoxArrowUp size="1.5rem" />
          </StyledIcon>
        </div>
      </StyledIconDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  .time {
    color: #8e8e8e;
    margin-left: 15px;
  }
`;

const StyledUserInfo = styled.div`
  display: flex;
  margin-top: 50px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px 15px 0 15px;
  }
  div {
    margin-top: 20px;
  }
  h4 {
    margin: 0;
  }
  span {
    color: #8e8e8e;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 15px 5px 15px;
  font-size: 1.5rem;
`;

const StyledContentImg = styled.img`
  width: 90vw;
  margin: 10px auto;
  border-radius: 20px;
`;

const StyledIconDiv = styled.div`
  width: 90%;
  display: flex;
  padding: 5px;
  margin: 15px auto 0 auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
`;

const StyledIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ color }) => color};
    border-radius: 80px;
    opacity: 0.5;
    transition: 0.5s;
  }
`;

export default Content;
