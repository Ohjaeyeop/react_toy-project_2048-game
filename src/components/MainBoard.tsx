import React from "react";
import styled, { css, keyframes } from "styled-components";
import palette from "../styles/palette";
import GameOverModal from "./GameOverModal";

const MainBoardBlock = styled.div`
  margin-top: 3rem;
  background-color: #bbac9f;
  border-radius: 10px;
  position: relative;
`;

const GridContainer = styled.div`
  height: 512px;
  padding: 0.9rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

type BoxProps = {
  background: string;
  color: string;
  event: number;
};

const boxAdd = keyframes`
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
`;

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.background};
  color: ${(props) =>
    props.color !== undefined &&
    props.color !== null &&
    parseInt(props.color) >= 8
      ? "white"
      : "#766e65"};
  font-size: ${(props) =>
    props.color.length >= 5
      ? "1.5rem"
      : props.color.length >= 3
      ? "2.5rem"
      : "3.5rem"};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${(props) => props.event === 1 && css`transition all 0.3s ease-in`};
  ${(props) =>
    props.event === 2 &&
    css`
      animation: ${boxAdd} 0.5s ease-in;
    `};
`;

function MainBoard(props: any) {
  const boxes: number[][] = props.boxes;
  const isGameOver: boolean = props.isGameOver;
  const boxEvent: number[][] = props.boxEvent;
  console.log(boxes);
  console.log(boxEvent);
  console.log("-------------------");
  return (
    <MainBoardBlock>
      <GameOverModal modal={isGameOver} />
      <GridContainer>
        {boxes.map((boxline, i) =>
          boxline.map((box, j) => (
            <Box
              background={palette[box.toString()]}
              color={box.toString()}
              event={boxEvent[i][j]}
              key={`${i},${j}`}
            >
              {box === 1 ? "" : box}
            </Box>
          ))
        )}
      </GridContainer>
    </MainBoardBlock>
  );
}

export default React.memo(MainBoard);
