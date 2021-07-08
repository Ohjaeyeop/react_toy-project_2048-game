import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useInitialize from "../hooks/useInitialize";
import MainBoard from "./MainBoard";
import getRandomPoints from "../lib/getRandomPoints";
import useArrowClick from "../hooks/useArrowClick";
import useBox from "../hooks/useBox";
import getNextBoxState from "../lib/getNextBoxState";
import getRandomPoint from "../lib/getRandomPoint";
import checkMovePossible from "../lib/checkMovePossible";
import checkGameOver from "../lib/checkGameOver";

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
  const { onUpdateBoxState, onCreateNewBox } = useArrowClick();
  const initiallize = useInitialize();
  const [point, setPoint] = useState<number[]>(getRandomPoints());
  const boxes = useBox();

  // 상태 초기화
  const onClick = () => {
    setPoint(getRandomPoints());
    initiallize(point);
  };

  // 박스 이동
  const moveBox = useCallback(
    (direction: number) => {
      let checkCreateNewBox = false;
      const p = new Promise((resolve, reject) => {
        let timerId = setInterval(() => {
          const movePossible = checkMovePossible(direction, boxes); // 이동 가능한지 체크
          if (!movePossible) {
            resolve(checkCreateNewBox);
            setTimeout(() => clearInterval(timerId));
          }
          const nextBoxState = getNextBoxState(direction, boxes); // 이동한 후의 상태 가져오기
          checkCreateNewBox = true;
          onUpdateBoxState(nextBoxState);
        }, 50);
      });
      p.then((checkCreateNewBox) => {
        if (checkCreateNewBox) onCreateNewBox(getRandomPoint(boxes));
      });
    },
    [boxes, onCreateNewBox, onUpdateBoxState]
  );

  // 방향키 눌렀을 때
  const handleKeyDown = useCallback(
    (event: any): void => {
      if (event.key === "ArrowLeft") {
        moveBox(1);
        if (checkGameOver(boxes)) {
          console.log("Game Over!!!");
        }
      } else if (event.key === "ArrowRight") {
        moveBox(2);
        if (checkGameOver(boxes)) {
          console.log("Game Over!!!");
        }
      } else if (event.key === "ArrowUp") {
        moveBox(3);
        if (checkGameOver(boxes)) {
          console.log("Game Over!!!");
        }
      } else if (event.key === "ArrowDown") {
        moveBox(4);
        if (checkGameOver(boxes)) {
          console.log("Game Over!!!");
        }
      }
    },
    [boxes, moveBox]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <MainTemplateBlock>
      <HeaderWrapper>
        <h1>2048</h1>
        <ButtonWrapper>
          <button onClick={onClick}>New Game</button>
        </ButtonWrapper>
      </HeaderWrapper>
      <MainBoard boxes={boxes} />
    </MainTemplateBlock>
  );
}

export default MainTemplate;
