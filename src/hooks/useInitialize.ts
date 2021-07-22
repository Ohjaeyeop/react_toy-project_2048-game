import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initialize } from "../modules/box";
import getRandomPoints from "../lib/getRandomPoints";
import { initializeevent } from "../modules/event";

export default function useInitialize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const randomPoints = getRandomPoints();
    dispatch(initialize(randomPoints));
    dispatch(initializeevent(randomPoints));
  }, [dispatch]);

  return useCallback(
    (point) => {
      dispatch(initialize(point));
      dispatch(initializeevent(point));
    },
    [dispatch]
  );
}
