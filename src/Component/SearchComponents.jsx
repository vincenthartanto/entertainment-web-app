import React from "react";
import SearchIcon from "../../public/assets/icon-search.svg";
export default function SearchComponents({ placeholder, onChange, value }) {
  return (
    <div className="flex items-center  space-x-4 text-white">
      <img className="h-8 w-8" src={SearchIcon}></img>
      <input
        className="bg-darkBlue border-none font-extralight w-full
  "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}
