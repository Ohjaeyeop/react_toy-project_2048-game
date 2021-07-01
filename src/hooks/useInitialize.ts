import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { initialize } from "../modules/box";

export default function useInitialize() {
  const dispatch = useDispatch();

  return useCallback((point) => dispatch(initialize(point)), [dispatch]);
}
