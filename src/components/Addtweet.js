import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePicture } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";

const Addtweet = ({ tweet }) => {
  const Textref = useRef(null); // text값 가져올려고 사용
  const [attachment, setAttachment] = useState(null); //파일 미리보기
  const [fileZero, setFileZero] = useState(null); //files의 첫번째 파일보낼때씀
  const [Buttondisable, setButtondisable] = useState(true); // 버튼 disable 관리

  const checkForm = () => {
    if (attachment === null && Textref.current.value === "") {
      setButtondisable(true);
    } else {
      setButtondisable(false);
    }
  };

  useEffect(() => {
    if (Textref.current) {
      checkForm();
    }
  }, [attachment, Textref.current]);

  // TextArea 높아 자동 조절
  const handleResizeHeight = useCallback(() => {
    if (Textref === null || Textref.current === null) {
      return;
    }
    Textref.current.style.height = attachment ? "80px" : "150px";
    Textref.current.style.height = Textref.current.scrollHeight + "px";
  }, [attachment, Textref]);

  // 파일 미리보기
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event; // 이거랑 같은것 const filed = event.target.files;
    const theFile = files[0];
    setFileZero(theFile);
    console.log(theFile);
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  //업로드할 이미지 지우기
  const onClearPhot = (e) => {
    setAttachment(null);
    setFileZero(null);
  };

  // value들 서버로 보내기
  const onSubmiHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = fileZero;

    if (attachment !== null) {
      formData.append("file", file);
    }
    const value = [
      {
        content: Textref.current?.value,
      },
    ];

    const blob = new Blob([JSON.stringify(value)], {
      type: "application/json",
    });
    if (blob.size > 16) {
      formData.append("data", blob);
    }
    // if (formData.value === undefined) {
    //   return console.log("빈값");
    // } else {
    //   await TwitAPI.addtwit(value);
    // }

    // console.log(file);
    // formdata 값 확인
    for (let value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <>
      <StlyedHead>
        <StlyedHeaderBox>
          <StyledHeader>
            <BiLeftArrowAlt size="2rem" />
          </StyledHeader>
          <StyledHeader>
            <StyledButton disabled={Buttondisable} onClick={onSubmiHandle}>
              Tweet
            </StyledButton>
          </StyledHeader>
        </StlyedHeaderBox>
      </StlyedHead>

      <StlyedGridBox>
        <StlyedUserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWY2WGeTZOwNzA9PZLbaKPARcnkcxaMylmwRBg3juIQ&s" />
        <StlyedContentBOX>
          <TextStyled
            name="content"
            rows={1}
            placeholder="What's happening?"
            onChange={checkForm}
            ref={Textref}
            attachment={attachment}
            onInput={handleResizeHeight}
            //input 이벤트 - ① 요소값 변경 직후에 발생. ② <select> 요소에서는 작동 X.
            // change 이벤트 - ① 요소값 변경 후 요소가 포커스 잃으면 발생. ② <select> 요소에서도 작동 O.
          ></TextStyled>
          {attachment && (
            <ImageBoxStyled>
              <StlyedContentImage src={attachment} />
              <ClearButtonStyled onClick={onClearPhot}>X</ClearButtonStyled>
            </ImageBoxStyled>
          )}
          <Hrstyled />
          <LabelBoxStyled>
            <LabelStyled for="file">
              <AiOutlinePicture size="1.6rem" color="rgb(051, 153, 255, 0.9)" />
            </LabelStyled>
          </LabelBoxStyled>
          <FileInputStyled id="file" type="file" onChange={onFileChange} />
        </StlyedContentBOX>
      </StlyedGridBox>
    </>
  );
};

export default Addtweet;
const LabelBoxStyled = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 9999px;
  padding: -5px 0 0 -10px;
  display: flex;
  justify-content: center;
  position: relative;
  top: -10px;
  left: -10px;

  align-items: center;
  &:hover {
    position: relative;
    top: -10px;
    left: -10px;
    background-color: rgb(051, 153, 255, 0.1);
  }
`;

const FileInputStyled = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const StlyedHead = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  max-height: 50px;
  z-index: 2;
`;
const StlyedHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 255, 255, 0.7);
  width: 100%;
  height: 50px;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  margin: 5px 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const StyledButton = styled.button`
  border: none;
  width: 70px;
  height: 30px;
  color: white;
  font-weight: 750;
  border-radius: 30%/60%;
  background-color: rgb(051, 153, 255, 0.9);
  transition: 0.3s;
  &:disabled {
    outline: none;
    background-color: rgb(051, 153, 215, 0.4);
  }
  &:enabled:hover {
    outline: none;
    background-color: rgb(031, 123, 215, 0.9);
  }
`;

const StlyedGridBox = styled.div`
  display: grid;
  max-width: 767px;
  width: 100%;

  height: 500px;
  grid-template-rows: 10% 10% 20% 20% 20% 20%;
  grid-template-columns: 5% 10% 20% 20% 20% 20% 5%;
`;
const StlyedUserImage = styled.img`
  grid-column-start: 2;
  grid-row-start: 2;

  border-radius: 9999px;
  width: 45px;
  height: 45px;
`;

const StlyedContentBOX = styled.div`
  grid-column: 3/7;
  grid-row: 2/7;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const TextStyled = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  padding: 12px;
  display: block;
  outline: none;
  min-height: 38px;
  border: none;
  height: ${(props) => (props.attachment ? "80px" : "150px")};
  /* caret-color: lightskyblue; */ // 깜빡이는 막대기 친구 색갈변경
  box-sizing: border-box;
  line-height: 20px;
  font-size: 1.3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  &::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
  }
  &:focus {
    background: transparent;
  }
`;
const ImageBoxStyled = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;
const StlyedContentImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;
`;
const ClearButtonStyled = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  color: white;
  font-weight: bold;
  border: none;
  background-color: rgb(30, 30, 30, 0.6);
`;
const Hrstyled = styled.div`
  border-bottom: 1px solid rgb(230, 230, 230);
  margin-bottom: 15px;
  /* border: none; */
  width: 100%;
  height: 10%;
`;

const LabelStyled = styled.label`
  &:hover {
    + div {
      background-color: rgb(031, 123, 215, 0.9);
    }
  }
`;

// {
//   /* Ref버젼 */
// }
// ref사용했을때 파일 미리보기 버젼
// const [imageUrl, setImageUrl] = useState(null);
// const imgRef = useRef();

// const onChangeImage = () => {
//   const reader = new FileReader();
//   const file = imgRef.current.files[0];
//   console.log(file);

//   reader.readAsDataURL(file);
//   reader.onloadend = () => {
//     setImageUrl(reader.result);
//     console.log("이미지주소", reader.result);
//   };
// };

// const onClickFileBtn = e => {
//   imgRef.current.click();
// };
// {
//   /* <StlyedContentImage
//               src={imageUrl ? imageUrl : "/img/profile.png"}
//             ></StlyedContentImage>
//             <input type="file" ref={imgRef} onChange={onChangeImage}></input> */
// }
