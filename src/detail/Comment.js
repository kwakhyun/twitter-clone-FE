import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Item from "../components/Item/Item";
import { useQuery, useMutation } from "react-query";
import { tweetAPI } from "../shared/api";
import { replyAPI } from "../shared/api";
import { useRef } from "react";

const Comment = () => {
  const navigate = useNavigate();
  const value = useRef(null);
  const [haveValue, setHaveValue] = useState(false);

  const showDiv = () => {
    document.querySelector(".id-info-div").style.display = "block";
    document.querySelector(".file-input-div").style.display = "block";
  };

  const checkValue = (event) => {
    if (event.target.value) {
      setHaveValue(true);
    } else {
      setHaveValue(false);
    }
  };

  const { data } = useQuery("getTweet", tweetAPI.getTweet);
  console.log(data);
  // const {data: commentList} = useQuery("getTweet", TwitAPI.gettwit);
  // console.log(data);

  const { mutate } = useMutation(replyAPI.addReply, {
    onSuccess: () => {},
    onError: () => {},
  });

  return (
    <StyledComment>
      <StyledFormDiv>
        <div className="id-info-div">Replying to @khyun9685</div>
        <div className="init-div">
          <div className="init-left-div">
            <img
              onClick={() => navigate("/profile")}
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"
              alt="profile img"
            />
            <input
              ref={value}
              onClick={showDiv}
              onChange={checkValue}
              placeholder="Tweet your reply"
            ></input>
          </div>
          <button
            className="reply-btn"
            onClick={() => {
              console.log("clicked");
            }}
            disabled={!haveValue}
          >
            Reply
          </button>
        </div>
        <div className="file-input-div">
          <input type="file" />
        </div>
      </StyledFormDiv>
      <div>{}</div>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  width: 100%;
`;

const StyledFormDiv = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e6ecf0;

  .init-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .init-left-div {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px 15px;
      }
      input {
        border: none;
        outline: none;
        font-size: 1.2rem;
      }
    }
  }

  .id-info-div {
    display: none;
    margin: 0 70px;
  }

  .reply-btn {
    width: 70px;
    height: 35px;
    margin-right: 15px;
    border-radius: 20px;
    border: 1px solid #1da1f2;
    background-color: #1da1f2;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }

  .file-input-div {
    display: none;
    margin: 10px 70px;
  }
`;

export default Comment;
