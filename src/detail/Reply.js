import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { replyAPI } from "../shared/api";
import ReplyItem from "./ReplyItem";

const Reply = ({ detail }) => {
  const navigate = useNavigate();
  const value = useRef(null);
  const file = useRef(null);
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

  const onReply = () => {
    value.current.value = "";
    document.querySelector(".id-info-div").style.display = "none";
    document.querySelector(".file-input-div").style.display = "none";
    setHaveValue(false);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(replyAPI.addReply, {
    onSuccess: () => {
      onReply();
      queryClient.invalidateQueries("getDetail");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "requestDto",
      new Blob(
        [
          JSON.stringify({
            content: value.current.value,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    formData.append("multipartFile", file.current.files[0]);
    mutate({
      data: formData,
      id: detail.twitId,
    });
  };

  return (
    <StyledContainer>
      <StyledForm
        name="file"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="id-info-div">
          Replying to
          <span> @{detail?.userId}</span>
        </div>
        <div className="init-div">
          <div className="init-left-div">
            <img
              onClick={() => navigate("/profile")}
              src={detail?.userProfileImage}
              alt="img"
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
          <input type="file" name="file" ref={file} />
        </div>
      </StyledForm>
      {detail?.commentList.map((reply) => {
        return (
          <div key={reply.id}>
            <ReplyItem reply={reply} />
          </div>
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 120vh;
`;

const StyledForm = styled.form`
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
    color: gray;
    span {
      font-weight: 500;
      color: #1da1f2;
    }
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

export default Reply;
