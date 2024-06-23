import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./LoadingIndicator.css";

type LoadingIndicatorProps = {
  size?: string | number;
};

export function LoadingIndicator({ size }: LoadingIndicatorProps) {
  return <AiOutlineLoading3Quarters className="text-flixcheck-green spinner" size={size} />;
}
