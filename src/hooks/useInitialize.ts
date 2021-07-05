import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialize } from "../modules/box";
import getRandomPoints from "../lib/getRandomPoints";

export default function useInitialize() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize(getRandomPoints()));
  }, [dispatch]);

  return useCallback((point) => dispatch(initialize(point)), [dispatch]);
}
