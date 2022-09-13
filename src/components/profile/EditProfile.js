import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileHeader from "../Header/ProfileHeader";
import styled from "styled-components";
import { useMutation } from "react-query";
import { proflieAPI } from "../../shared/api";

const EditProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const profileFile = useRef(null);
  const backgroundFile = useRef(null);

  const name = useRef(null);
  const [haveName, setHaveName] = useState(true);
  const [countName, setCountName] = useState(0);

  const bio = useRef(null);
  const [haveBio, setHaveBio] = useState(true);
  const [countBio, setCountBio] = useState(0);

  useEffect(() => {
    if (name.current.value) {
      setCountName(name.current.value.length);
    }
    if (bio.current.value) {
      setCountBio(bio.current.value.length);
    } else {
      setHaveBio(false);
    }
  }, []);

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

  const { mutate } = useMutation(proflieAPI.modify, {
    onSuccess: () => {
      navigate("/profile");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profileFile", profileFile.current.files[0]);
    formData.append("backgroundFile", backgroundFile.current.files[0]);
    formData.append(
      "profileReqDto",
      new Blob(
        [
          JSON.stringify({
            nickname: name.current.value,
            bio: bio.current.value,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    mutate(formData);
  };

  return (
    <form name="file" encType="multipart/form-data" onSubmit={handleSubmit}>
      <ProfileHeader isEdit={true} />
      <StyledContainer>
        {state?.backgroundImageUrl ? (
          <StyledBackImg src={state?.backgroundImageUrl} alt="background-img" />
        ) : (
          <StyledBackImg
            src="http://file3.instiz.net/data/file3/2018/03/01/3/f/b/3fbb1ea5b4d47195118330ec0be2706e.jpg"
            alt="background-img"
          />
        )}
        <input type="file" name="file" ref={backgroundFile} />

        <StyledProfileImg src={state?.imageUrl} alt="profile-img" />
        <input type="file" name="file" ref={profileFile} />

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
            maxLength={50}
            defaultValue={state?.nickname}
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
            maxLength={160}
            defaultValue={state?.bio}
          ></textarea>
        </StyledBioDiv>
        <StyledDateDiv>
          <span>Birth date</span>
          <div>{state?.birthDate}</div>
        </StyledDateDiv>
      </StyledContainer>
    </form>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  .blank-message {
    display: none;
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
    display: none;
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
    display: none;
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

const StyledDateDiv = styled.div`
  margin-top: 25px;
  margin-left: 25px;
`;

export default EditProfile;
