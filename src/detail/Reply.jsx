import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { proflieAPI, replyAPI } from "../shared/api";
import { IoImageOutline } from "react-icons/io5";
import ReplyItem from "./ReplyItem";
import styled from "styled-components";

const Reply = ({ detail }) => {
  const navigate = useNavigate();
  const params = useParams();
  const value = useRef(null);
  const file = useRef(null);
  const reply = useRef(null);
  const idInfo = useRef(null);
  const fileInput = useRef(null);
  const [focus, setFocus] = useState(false);
  const [haveValue, setHaveValue] = useState(false);
  const [attachment, setAttachment] = useState(null);

  const showDiv = () => {
    idInfo.current.style.display = "block";
    fileInput.current.style.display = "block";
    value.current.style.height = "100px";
    reply.current.style.bottom = "10px";
    setFocus(true);
  };

  const checkValue = useCallback(() => {
    if (attachment === null && value.current.value === "") {
      setHaveValue(false);
    } else {
      setHaveValue(true);
    }
  }, [attachment, value]);

  useEffect(() => {
    if (value.current) {
      checkValue();
    }
  }, [checkValue]);

  const onReply = () => {
    value.current.value = "";
    idInfo.current.style.display = "none";
    fileInput.current.style.display = "none";
    value.current.style.height = "25px";
    reply.current.style.bottom = "17px";
    setFocus(false);
    setHaveValue(false);
    setAttachment(null);
  };

  // 입력창 높이 조절
  const handleResizeHeight = () => {
    if (value === null || value.current === null) return;
    value.current.style.height = "100px";
    value.current.style.height = value.current.scrollHeight + "px";
  };

  // 이미지 파일 미리보기
  const onFileChange = () => {
    const fileReader = new FileReader();
    fileReader.onloadend = (finishedEvent) => {
      const fileUrl = finishedEvent.currentTarget.result;
      setAttachment(fileUrl);
    };

    fileReader.readAsDataURL(file.current.files[0]);
  };

  // 이미지 파일 지우기
  const deleteImage = () => {
    setAttachment(null);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(replyAPI.addReply, {
    onSuccess: () => {
      onReply();
      queryClient.invalidateQueries(["getDetail", params.id]);
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

  const { data, isLoading, error } = useQuery(
    "getProfileData",
    async () => await proflieAPI.otherProfile(localStorage.getItem("user_id"))
  );
  const myProfileImage = data?.data.data.imageUrl;

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Error</div>;

  return (
    <StyledContainer>
      <StyledForm
        name="file"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        focus={focus}
      >
        <div className="id-info-div" ref={idInfo}>
          Replying to
          <span> @{detail?.userId}</span>
        </div>
        <div className="init-div">
          <img
            onClick={() =>
              navigate(`/profile/${localStorage.getItem("user_id")}`)
            }
            src={myProfileImage}
            alt="profile"
          />
          <StyledTextarea
            ref={value}
            onClick={showDiv}
            onChange={checkValue}
            onInput={handleResizeHeight}
            placeholder="Tweet your reply"
            maxLength={280}
            focus={focus}
          ></StyledTextarea>
        </div>
        {attachment && (
          <StyledImageDiv>
            <img src={attachment} alt="img" />
            <button onClick={deleteImage}>⨉</button>
          </StyledImageDiv>
        )}

        <div className="file-input-div" ref={fileInput}>
          <label htmlFor="file">
            <IoImageOutline size="1.5rem" color="#1d9bf0" />
          </label>
          <input
            type="file"
            id="file"
            hidden
            ref={file}
            onChange={onFileChange}
          />
        </div>
        <StyledButton disabled={!haveValue} ref={reply} focus={focus}>
          Reply
        </StyledButton>
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
  margin-bottom: 100%;
`;

const StyledForm = styled.form`
  position: relative;
  padding: ${({ focus }) => (focus ? "10px 0" : "0")};
  border-bottom: 1px solid #e6ecf0;
  .id-info-div {
    display: none;
    margin: 0 70px;
    color: gray;
    span {
      font-weight: 500;
      color: #1da1f2;
    }
  }
  .init-div {
    display: flex;
    justify-content: space-between;
    align-items: ${({ focus }) => (focus ? "flex-start" : "center")};
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 10px 10px 10px 15px;
    }
  }
  .file-input-div {
    display: none;
    margin-top: 30px;
    margin-left: 70px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: ${({ focus }) => (focus ? "100px" : "25px")};
  margin-top: ${({ focus }) => (focus ? "23px" : "0")};
  margin-right: 15px;
  resize: none;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 17px;
  right: 15px;
  width: 70px;
  height: 35px;
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
`;

const StyledImageDiv = styled.div`
  position: relative;
  width: 80%;
  height: 50%;
  margin: 10px 15px 0 70px;
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border: none;
    border-radius: 20px;
  }
  button {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    color: white;
    font-size: 1rem;
    border: none;
    background-color: rgb(30, 30, 30, 0.6);
  }
`;

export default Reply;
