import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="overflow-auto flex-1">
          <div className="max-h-0">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
