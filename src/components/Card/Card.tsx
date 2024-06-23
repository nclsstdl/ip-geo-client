import clsx from "clsx";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & { header?: string; className?: string };

export function Card({ header, children, className }: CardProps) {
  return (
    <div className={clsx("p-2 w-full max-w-[375px] bg-white shadow-sm rounded", className)}>
      {header && <h2 className="text-lg font-semibold tracking-tighter mb-2">{header}</h2>}
      <div>{children}</div>
    </div>
  );
}
