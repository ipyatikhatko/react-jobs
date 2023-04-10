import React, { FC } from "react";
import Chip from "@/ui/Chip";
import JobRate from "../JobRate";
import { IJobRate } from "@/types/models";

type JobPreviewProps = {
  title: string;
  jobRate: IJobRate;
  company: string;
};

const JobPreview: FC<JobPreviewProps> = ({ title, jobRate, company }) => {
  return (
    <div className="group py-4 border-r border-slate-100 cursor-pointer hover:bg-slate-50">
      <div className="px-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold">{title}</h3>
          <JobRate {...jobRate} />
        </div>
        <h4 className="text-sm font-light">{company}</h4>
        <div className="mt-2 flex gap-2 text-xs">
          <Chip className="group-hover:bg-slate-200">typescript</Chip>
          <Chip className="group-hover:bg-slate-200">zustand</Chip>
          <Chip className="group-hover:bg-slate-200">mui</Chip>
          <Chip className="group-hover:bg-slate-200">next.js</Chip>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
