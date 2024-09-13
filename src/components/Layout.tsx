import { ReactNode, useEffect } from "react";
import AsideBar from "./AsideBar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const event = new Event("init");
    document.dispatchEvent(event);
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <AsideBar />
      {children}
    </div>
  );
}
