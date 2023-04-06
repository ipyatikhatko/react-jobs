import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-16 border-b border-green-500">
      <div className="h-full flex justify-between items-center px-4">
        <h1 className=" font-bold text-2xl">ReactJobs</h1>
        <div>nav items</div>
        <div>user</div>
      </div>
    </header>
  );
};

export default Header;
