import { IJobRate } from "@/types/models";
import clsx from "clsx";
import React, { FC } from "react";

interface JobRateProps extends IJobRate {
  className?: string;
}

const JobRate: FC<JobRateProps> = ({ from, to, currency = "$", className }) => {
  return (
    <div className={clsx("flex gap-2 text-green-600 font-bold", className)}>
      <span>
        {from}
        {currency}
      </span>
      {to && (
        <>
          <span>{"-"}</span>
          <span>
            {to}
            {currency}
          </span>
        </>
      )}
    </div>
  );
};

export default JobRate;
