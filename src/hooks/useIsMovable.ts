import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useIsMovable() {
  const isMovable: boolean[][] = useSelector(
    (state: RootState) => state.box.isMovable
  );
  return isMovable;
}
