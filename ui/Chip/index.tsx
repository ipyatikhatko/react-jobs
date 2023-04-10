import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type ChipProps = {
  className?: string;
  children: ReactNode;
};

const Chip: FC<ChipProps> = ({ className, children }) => {
  return (
    <span
      className={clsx(
        "px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full shadow-md",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
