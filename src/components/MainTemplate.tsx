import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useInitialize from "../hooks/useInitialize";
import MainBoard from "./MainBoard";
import getRandomPoints from "../lib/getRandomPoints";
import useArrowClick from "../hooks/useArrowClick";
import useBox from "../hooks/useBox";
import getNextBoxState from "../lib/getNextBoxState";
import getRandomPoint from "../lib/getRandomPoint";

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

  const onClick = () => {
    setPoint(getRandomPoints());
    initiallize(point);
  };

  const handleKeyDown = useCallback(
    (event: any): void => {
      let checkCreateNewBox = false;
      if (event.key === "ArrowLeft") {
        const p = new Promise((resolve, reject) => {
          let timerId = setInterval(() => {
            const { checkMovePossible, boxState } = getNextBoxState(1, boxes);
            if (!checkMovePossible) {
              resolve(checkCreateNewBox);
              setTimeout(() => clearInterval(timerId));
            }
            checkCreateNewBox = true;
            onUpdateBoxState(boxState);
          }, 50);
        });
        p.then((checkCreateNewBox) => {
          if (checkCreateNewBox) onCreateNewBox(getRandomPoint(boxes));
        });
      } else if (event.key === "ArrowRight") {
        const p = new Promise((resolve, reject) => {
          let timerId = setInterval(() => {
            const { checkMovePossible, boxState } = getNextBoxState(2, boxes);
            if (!checkMovePossible) {
              resolve(checkCreateNewBox);
              setTimeout(() => clearInterval(timerId));
            }
            checkCreateNewBox = true;
            onUpdateBoxState(boxState);
          }, 50);
        });
        p.then((checkCreateNewBox) => {
          if (checkCreateNewBox) onCreateNewBox(getRandomPoint(boxes));
        });
      } else if (event.key === "ArrowUp") {
        const p = new Promise((resolve, reject) => {
          let timerId = setInterval(() => {
            const { checkMovePossible, boxState } = getNextBoxState(3, boxes);
            if (!checkMovePossible) {
              resolve(checkCreateNewBox);
              setTimeout(() => clearInterval(timerId));
            }
            checkCreateNewBox = true;
            onUpdateBoxState(boxState);
          }, 50);
        });
        p.then((checkCreateNewBox) => {
          if (checkCreateNewBox) onCreateNewBox(getRandomPoint(boxes));
        });
      } else if (event.key === "ArrowDown") {
        const p = new Promise((resolve, reject) => {
          let timerId = setInterval(() => {
            const { checkMovePossible, boxState } = getNextBoxState(4, boxes);
            if (!checkMovePossible) {
              resolve(checkCreateNewBox);
              setTimeout(() => clearInterval(timerId));
            }
            checkCreateNewBox = true;
            onUpdateBoxState(boxState);
          }, 50);
        });
        p.then((checkCreateNewBox) => {
          if (checkCreateNewBox) onCreateNewBox(getRandomPoint(boxes));
        });
      }
    },
    [boxes, onUpdateBoxState, onCreateNewBox]
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
