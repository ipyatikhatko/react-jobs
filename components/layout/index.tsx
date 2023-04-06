import React, { ReactNode } from "react";
import Header from "./header";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="w-[15vw] border-r">
          <div className="flex flex-col mt-16 px-4 gap-4">
            <Link
              className="font-bold text-xl hover:bg-slate-200 p-1 rounded"
              href="/jobs"
            >
              Jobs
            </Link>
            <Link
              className="font-bold text-xl hover:bg-slate-200 p-1 rounded"
              href="/companies"
            >
              Companies
            </Link>
            <Link
              className="font-bold text-xl hover:bg-slate-200 p-1 rounded"
              href="/companies"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
