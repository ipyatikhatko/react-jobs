import Link from "next/link";
import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="h-16 border-b">
      <div className="h-full flex justify-between items-center px-4">
        <h1 className=" font-bold text-2xl">ReactJobs</h1>
        <button className="py-1 px-4 border border-green-300 rounded-full bg-green-200 text-green-800">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
