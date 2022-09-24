import React, { useEffect } from "react";
import styled from "styled-components";
function Modal(props) {
  function closeModal() {
    props.closeModal();
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY) * -1);
    };
  }, []);

  return (
    <ModalStyled onClick={closeModal}>
      <div className="modalBody" onClick={e => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          Cancel
        </button>
        {props.children}
      </div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;

  .modalBody {
    position: absolute;
    width: 230px;
    height: 230px;
    padding: 30px 30px 30px 30px;
    z-index: 12;
    text-align: left;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
  
  #modalCloseBtn {
    position: absolute;
    top: 215px;
    z-index: 11;
    right: 28px;
    border: 1px solid rgb(220, 220, 220);
    width: 80%;
    height: 15%;
    border-radius: 12%/60%;
    color: rgba(0, 0, 0, 0.7);
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      background-color: rgb(230, 230, 230);
      cursor: pointer;
    }
  }
  `;

export default Modal;
