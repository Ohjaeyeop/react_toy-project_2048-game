import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateevent } from "../modules/event";

export default function useUpdateEvent() {
  const dispath = useDispatch();

  return useCallback(
    (nextEventState) => dispath(updateevent(nextEventState)),
    [dispath]
  );
}
