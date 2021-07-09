import React from "react";
import styled from "styled-components";

const GameOverBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(238, 228, 218, 0.73);
  p {
    font-size: 60px;
    font-weight: bold;
    color: #766f66;
    height: 60px;
    line-height: 60px;
  }
`;

function GameOverModal(props: any) {
  const modal: boolean = props.modal;
  if (!modal) return null;
  return (
    <GameOverBlock>
      <p>Game Over!!</p>
    </GameOverBlock>
  );
}

export default GameOverModal;
