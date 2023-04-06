import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-[15vw] border-r">
      <div className="flex flex-col mt-16 px-4 gap-4">
        <Link
          className="font-bold text-xl hover:bg-slate-200 py-1 px-3 rounded-full"
          href="/jobs"
        >
          Jobs
        </Link>
        <Link
          className="font-bold text-xl hover:bg-slate-200 py-1 px-3 rounded-full"
          href="/companies"
        >
          Companies
        </Link>
        <Link
          className="font-bold text-xl hover:bg-slate-200 py-1 px-3 rounded-full"
          href="/companies"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
