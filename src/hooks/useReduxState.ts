import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useReduxState() {
  const box: number[][] = useSelector((state: RootState) => state.box.boxstate);
  const event: number[][] = useSelector((state: RootState) => state.event);
  return { box, event };
}
