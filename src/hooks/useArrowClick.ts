import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createnewbox, updateboxstate } from "../modules/box";

export default function useArrowClick() {
  const dispatch = useDispatch();

  const onUpdateBoxState = useCallback(
    (nextBoxState) => dispatch(updateboxstate(nextBoxState)),
    [dispatch]
  );

  const onCreateNewBox = useCallback(
    (point) => dispatch(createnewbox(point)),
    [dispatch]
  );

  return { onUpdateBoxState, onCreateNewBox };
}
