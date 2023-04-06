import React from "react";

type Props = {};

const FreshJob = (props: Props) => {
  return (
    <div className="group py-6 border-r cursor-pointer hover:bg-slate-100">
      <div className="px-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold">Middle React Developer Needed</h3>
          <div className="flex gap-2 text-green-600 font-bold">
            <span>2000$</span>
            <span>-</span>
            <span>3000$</span>
          </div>
        </div>
        <h4 className="font-light">
          In <b>Company name</b>
        </h4>
        <div className="mt-2 flex gap-2 text-xs">
          <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
            typescript
          </span>
          <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
            zustand
          </span>
          <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
            mui
          </span>
          <span className="px-2 py-1 bg-slate-100 group-hover:bg-slate-300 rounded-full">
            next.js
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreshJob;
