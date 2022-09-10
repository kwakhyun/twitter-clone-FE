import { useQuery } from "react-query";
import ProfileHeader from "../Header/ProfileHeader";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const EditProfile = () => {
  const name = useRef(null);
  const [haveName, setHaveName] = useState(true);
  const [countName, setCountName] = useState(0);

  const bio = useRef(null);
  const [haveBio, setHaveBio] = useState(false);
  const [countBio, setCountBio] = useState(0);

  const nameFocus = () => {
    name.current.focus();
    document.querySelector(".name-count").style.display = "block";
  };
  const bioFocus = () => {
    bio.current.focus();
    document.querySelector(".bio-count").style.display = "block";
  };

  const onChangeName = () => {
    if (name.current.value) {
      document.querySelector(".blank-message").style.display = "none";
      setHaveName(true);
    } else {
      document.querySelector(".blank-message").style.display = "block";
      setHaveName(false);
    }
    setCountName(name.current.value.length);
  };

  const onBlurName = () => {
    if (name.current.value) {
      document.querySelector(".name-count").style.display = "none";
    }
  };

  const onChangeBio = () => {
    bio.current.value !== "" ? setHaveBio(true) : setHaveBio(false);
    setCountBio(bio.current.value.length);
  };

  const onBlurBio = () => {
    if (name.current.value) {
      document.querySelector(".bio-count").style.display = "none";
    }
  };

  return (
    <>
      <ProfileHeader isEdit={true} />
      <StyledContainer>
        <StyledBackImg
          src="http://file3.instiz.net/data/file3/2018/03/01/3/f/b/3fbb1ea5b4d47195118330ec0be2706e.jpg"
          alt="background-img"
        />
        <StyledProfileImg
          src="https://w.namu.la/s/9cbb48da2cd403ec50cb15a51b822834aa39c596cbfac6d42914b397ce6c1d656ac4de5f880b136bf2623eb9921249d5c9c36e8544e2ca8c85e1df13064ce5a75e9ed339d54703dfb5e4f807c55f3cb0cffed37cec45742c786253f382bb0172"
          alt="profile-img"
        />

        <StyledNameDiv onClick={nameFocus} haveValue={haveName}>
          <StyledNameSpan className="name-span" haveValue={haveName}>
            Name
          </StyledNameSpan>
          <span className="name-count">{countName} / 50</span>
          <input
            type="text"
            ref={name}
            onChange={onChangeName}
            onBlur={onBlurName}
            maxLength={49}
            defaultValue="kh"
          />
        </StyledNameDiv>
        <span className="blank-message">Name can't be blank</span>

        <StyledBioDiv onClick={bioFocus}>
          <StyledBioSpan className="bio-span" haveValue={haveBio}>
            Bio
          </StyledBioSpan>
          <span className="bio-count">{countBio} / 160</span>
          <textarea
            ref={bio}
            onChange={onChangeBio}
            onBlur={onBlurBio}
            maxLength={159}
          ></textarea>
        </StyledBioDiv>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  .blank-message {
    color: #f42a36;
    font-size: 12px;
    font-weight: 500;
    margin-left: 27px;
  }
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

const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90vw;
  height: 55px;
  border: ${({ haveValue }) =>
    haveValue ? "2px solid #e8e8e8" : "2px solid #f42a36"};
  &:focus-within {
    border: ${({ haveValue }) =>
      haveValue ? "2px solid #1da1f2" : "2px solid #f42a36"};
    .name-span {
      color: ${({ haveValue }) => (haveValue ? "#1da1f2" : "#f42a36")};
      font-size: 0.8rem;
      margin-top: 8px;
      margin-left: 8px;
      transition: 0.2s;
    }
  }
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: sans-serif;
    margin: 27px 0 0 5px;
  }
  .name-count {
    position: absolute;
    color: gray;
    font-weight: 500;
    font-size: 0.8rem;
    margin-top: 8px;
    right: 8%;
  }
`;

const StyledNameSpan = styled.span`
  color: gray;
  position: absolute;
  margin-top: ${({ haveValue }) => (haveValue ? "8px" : "16px")};
  margin-left: 8px;
  font-size: ${({ haveValue }) => (haveValue ? "0.8rem" : "1rem")};
  transition: 0.2s;
`;

const StyledBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  border: 2px solid #e8e8e8;
  border-radius: 5px;
  width: 90vw;
  height: 90px;
  &:focus-within {
    border: 2px solid #1da1f2;
    .bio-span {
      color: #1da1f2;
      font-size: 0.8rem;
      margin-top: 8px;
      margin-left: 8px;
      transition: 0.2s;
    }
  }
  textarea {
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
    font-family: sans-serif;
    margin: 27px 0 0 5px;
  }
  .bio-count {
    position: absolute;
    color: gray;
    font-weight: 500;
    font-size: 0.8rem;
    margin-top: 8px;
    right: 8%;
  }
`;

const StyledBioSpan = styled.span`
  color: gray;
  position: absolute;
  margin-top: ${({ haveValue }) => (haveValue ? "8px" : "16px")};
  margin-left: 8px;
  font-size: ${({ haveValue }) => (haveValue ? "0.8rem" : "1rem")};
  transition: 0.2s;
`;

export default EditProfile;
