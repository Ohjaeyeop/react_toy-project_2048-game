import React from "react";
import styled from "styled-components";

const MainBoardBlock = styled.div`
  margin-top: 3rem;
  background-color: #bbac9f;
  height: 512px;
  border-radius: 10px;
`;

function MainBoard() {
  return <MainBoardBlock></MainBoardBlock>;
}

export default MainBoard;
