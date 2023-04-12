import React from "react";

export default function ListMovieLayout({ children }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full md:grid-cols-3 lg:grid-cols-4 ">
      {children}
    </div>
  );
}
