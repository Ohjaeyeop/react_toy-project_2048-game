import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { initializetozero } from "../modules/event";

export default function useInitialzeEvent() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(initializetozero()), [dispatch]);
}
