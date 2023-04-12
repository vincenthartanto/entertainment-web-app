import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Component/NavigationBar";
export default function RootLayout() {
  return (
    <div className="h-screen w-screen  lg:flex  bg-darkBlue space-y-4  lg:justify-start lg:items-start lg:space-y-0 lg:py-8  overflow-scroll">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
}
