"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Wrapper = ({ children }) => {
  const pathname = usePathname();

  const hideHeaderAndFooterPaths = [
    "/signup",
    "/login",
    "/forget-password",
    "/verify-email",
    "/admin_dashboard",
  ];
  const hideHeaderAndFooter = hideHeaderAndFooterPaths.includes(pathname);

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      {children}
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

export default Wrapper;
