import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useBox() {
  const box = useSelector((state: RootState) => state.box.boxstate);
  return box;
}
