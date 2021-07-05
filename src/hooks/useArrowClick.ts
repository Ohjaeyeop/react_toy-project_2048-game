import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  downarrowclick,
  leftarrowclick,
  rightarrowclick,
  uparrowclick,
} from "../modules/box";

export default function useArrowClick() {
  const dispatch = useDispatch();

  const onLeftArrow = useCallback(() => dispatch(leftarrowclick()), [dispatch]);
  const onRightArrow = useCallback(
    () => dispatch(rightarrowclick()),
    [dispatch]
  );
  const onUpArrow = useCallback(() => dispatch(uparrowclick()), [dispatch]);
  const onDownArrow = useCallback(() => dispatch(downarrowclick()), [dispatch]);

  return { onLeftArrow, onRightArrow, onUpArrow, onDownArrow };
}
