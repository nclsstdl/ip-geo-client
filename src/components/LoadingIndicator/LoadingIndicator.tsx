import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoadingIndicatorProps = {
  size?: string | number;
};

export function LoadingIndicator({ size }: LoadingIndicatorProps) {
  return (
    <AiOutlineLoading3Quarters className="text-flixcheck-green" size={size} style={{ transform: "rotate(90deg)" }} />
  );
}
