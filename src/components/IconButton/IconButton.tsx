import { ReactElement } from "react";
import { MdError } from "react-icons/md";
import { clsx } from "clsx";

type IconButtonProps = { type: "button" | "submit"; icon: ReactElement; disabled?: boolean; onClick?: () => void };

export function IconButton({ type, icon, disabled, onClick }: IconButtonProps) {
  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  return (
    <button
      className={clsx(
        "w-[32px] h-[32px] flex justify-center items-center rounded-2xl  transition-all ease-in",
        disabled ? "opacity-30" : "hover:bg-gray-100"
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon ? icon : <MdError />}
    </button>
  );
}
