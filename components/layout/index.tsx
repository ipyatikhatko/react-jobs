import React, { ReactNode } from "react";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh]">
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
