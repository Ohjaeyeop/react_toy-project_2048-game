import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateismovable } from "../modules/box";

export default function useUpdateIsMovable() {
  const dispatch = useDispatch();

  return useCallback(
    (isMovable) => dispatch(updateismovable(isMovable)),
    [dispatch]
  );
}
