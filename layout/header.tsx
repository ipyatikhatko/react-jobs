import clsx from "clsx";
import Link from "next/link";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="h-16 border-b border-primary-100 bg-slate-100">
      <div className="h-full flex justify-between items-center px-4">
        <h1 className="font-bold text-2xl text-primary-500">
          ⚛️ React<span className="text-primary-800">.</span>
          jobs
        </h1>
        <button
          className={clsx(
            "py-1 px-4 font-light rounded-full transition-all shadow-md shadow-primary-300",
            "bg-gradient-to-b from-primary-300 via-primary-500 to-primary-600 text-white",
            "hover:shadow-lg hover:shadow-primary-300"
          )}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
