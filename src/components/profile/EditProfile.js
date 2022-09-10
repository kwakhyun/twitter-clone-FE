import { useQuery } from "react-query";
import ProfileHeader from "../Header/ProfileHeader";
import styled from "styled-components";

const EditProfile = () => {
  return (
    <>
      <ProfileHeader isEdit={true} />
      <StyledContainer>
        <StyledBackImg
          src="https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__480.jpg"
          alt="img"
        />
        <div>
          <label>
            <StyledProfileImg src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800" />
          </label>
          {/* <input className="profile_img" type="file" /> */}
        </div>
        <StyledNameDiv>
          <label>Name</label>
          <input type="text" />
        </StyledNameDiv>
        <StyledBioDiv>
          <label>Bio</label>
          <textarea></textarea>
        </StyledBioDiv>
      </StyledContainer>
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

const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 85vw;
  label {
    margin-bottom: 5px;
  }
  input {
    border: none;
    padding: 5px;
    &:focus {
      outline-style: auto;
      outline-color: #1da1f2;
    }
  }
`;

const StyledBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 85vw;
  label {
    margin-bottom: 5px;
  }
  textarea {
    border: none;
    padding: 10px;
    &:focus {
      outline-style: auto;
      outline-color: #1da1f2;
    }
  }
`;

export default EditProfile;
