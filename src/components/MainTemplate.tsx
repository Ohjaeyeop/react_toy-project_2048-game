import React from "react";
import styled from "styled-components";
import MainBoard from "./MainBoard";

const MainTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.25rem;
`;

const HeaderWrapper = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: #766e65;
    margin: 0;
  }
  button {
    border: none;
    outline: none;
    background-color: #8f7a65;
    color: white;
    font-size: 1.1rem;
    padding: 0.7rem 1.25rem;
    border-radius: 5px;
    font-weight: bold;
  }
  button:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.75rem;
`;

function MainTemplate() {
  return (
    <MainTemplateBlock>
      <HeaderWrapper>
        <h1>2048</h1>
        <ButtonWrapper>
          <button>New Game</button>
        </ButtonWrapper>
      </HeaderWrapper>
      <MainBoard />
    </MainTemplateBlock>
  );
}

export default MainTemplate;
