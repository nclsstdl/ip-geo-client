import { ReactElement } from "react";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { clsx } from "clsx";

type IconButtonProps = { type: "button" | "submit"; icon: ReactElement; isLoading?: boolean; onClick?: () => void };

export function IconButton({ type, icon, isLoading, onClick }: IconButtonProps) {
  const handleClick = () => {
    if (isLoading) {
      return;
    }

    onClick && onClick();
  };

  return (
    <button
      className={clsx(
        "w-[32px] h-[32px] flex justify-center items-center rounded-2xl  transition-all ease-in",
        isLoading ? "opacity-30" : "hover:bg-gray-100"
      )}
      type={type}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? <AiOutlineLoading3Quarters style={{ transform: "rotate(90deg)" }} /> : icon ? icon : <MdError />}
    </button>
  );
}
