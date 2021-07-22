import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useInitialize from "../hooks/useInitialize";
import MainBoard from "./MainBoard";
import getRandomPoints from "../lib/getRandomPoints";
import useArrowClick from "../hooks/useArrowClick";
import getNextBoxState from "../lib/getNextBoxState";
import getRandomPoint from "../lib/getRandomPoint";
import checkMovePossible from "../lib/checkMovePossible";
import checkGameOver from "../lib/checkGameOver";
import useIsMovable from "../hooks/useIsMovable";
import useUpdateIsMovable from "../hooks/useUpdateIsMovable";
import useReduxState from "../hooks/useReduxState";
import useUpdateEvent from "../hooks/useUpdateEvent";
import useInitialzeEvent from "../hooks/useInitializeEvent";

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
  const updateIsMovable = useUpdateIsMovable();
  const initialize = useInitialize();
  const updateEvent = useUpdateEvent();
  const { box, event } = useReduxState();
  const isMovable = useIsMovable();
  const initializeEvent = useInitialzeEvent();
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // 상태 초기화
  const onClick = () => {
    initialize(getRandomPoints());
    setIsGameOver(false);
  };

  // 박스 이동
  const moveBox = useCallback(
    (direction: number) => {
      if (checkGameOver(box)) {
        setIsGameOver(true);
      } else {
        let checkCreateNewBox = false;
        let eventState: number[][] = Array.from(Array(4), () =>
          Array(4).fill(0)
        );
        initializeEvent();
        let timerId = setInterval(() => {
          const movePossible = checkMovePossible(direction, box, isMovable); // 이동 가능한지 체크
          if (!movePossible) {
            if (checkCreateNewBox) {
              const randomPoint = getRandomPoint(box);
              onCreateNewBox(randomPoint);
              eventState[randomPoint[0]][randomPoint[1]] = 1;
              updateEvent(eventState);
            }
            setTimeout(() => clearInterval(timerId));
          } else {
            const [nextBoxState, nextBoxEvent, nextIsMovable] = getNextBoxState(
              direction,
              box,
              eventState,
              isMovable
            ); // 이동한 후의 상태 가져오기
            checkCreateNewBox = true;
            eventState = nextBoxEvent;
            onUpdateBoxState(nextBoxState);
            updateIsMovable(nextIsMovable);
          }
        }, 60);
      }
    },
    [
      box,
      initializeEvent,
      isMovable,
      onCreateNewBox,
      onUpdateBoxState,
      updateEvent,
      updateIsMovable,
    ]
  );

  // 방향키 눌렀을 때
  const handleKeyDown = useCallback(
    (event: any): void => {
      if (!isGameOver) {
        if (event.key === "ArrowLeft") {
          moveBox(1);
        } else if (event.key === "ArrowRight") {
          moveBox(2);
        } else if (event.key === "ArrowUp") {
          moveBox(3);
        } else if (event.key === "ArrowDown") {
          moveBox(4);
        }
      }
    },
    [isGameOver, moveBox]
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
      <MainBoard boxes={box} boxEvent={event} isGameOver={isGameOver} />
    </MainTemplateBlock>
  );
}

export default MainTemplate;
