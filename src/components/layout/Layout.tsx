import Navbar from "@/components/navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | undefined;
}

function Layout({ children = "<></>" }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
