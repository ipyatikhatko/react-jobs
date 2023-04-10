import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-[20vw] border-r border-slate-100 bg-slate-50">
      <div className="flex flex-col mt-16">
        <Link
          className="font-bold text-xl hover:bg-slate-100 hover:text-primary-500 py-4 px-5"
          href="/jobs"
        >
          <span className="mr-4">💼</span>Jobs
        </Link>
        <Link
          className="font-bold text-xl hover:bg-slate-100 hover:text-primary-500 py-4 px-5"
          href="/companies"
        >
          <span className="mr-4">🏢</span>Companies
        </Link>
        <Link
          className="font-bold text-xl hover:bg-slate-100 hover:text-primary-500 py-4 px-5"
          href="/dashboard"
        >
          <span className="mr-4">📊</span>Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
