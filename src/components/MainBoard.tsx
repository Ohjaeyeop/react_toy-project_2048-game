import React from "react";
import styled from "styled-components";
import palette from "../styles/palette";

const MainBoardBlock = styled.div`
  margin-top: 3rem;
  background-color: #bbac9f;
  height: 512px;
  border-radius: 10px;
  padding: 0.9rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`;

type BoxProps = {
  background: string;
  color: string;
};

const Box = styled.div<BoxProps>`
  background: ${(props) => props.background};
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
      ? "2rem"
      : "3rem"};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

function MainBoard(props: any) {
  const boxes: number[][] = props.boxes;
  return (
    <MainBoardBlock>
      {boxes.map((boxline) =>
        boxline.map((box) => (
          <Box background={palette[box.toString()]} color={box.toString()}>
            {box === 1 ? "" : box}
          </Box>
        ))
      )}
    </MainBoardBlock>
  );
}

export default MainBoard;
