import React from "react";
import SearchForm from "./SearchForm";

export default function NavBar() {
  return (
    <div className="flex justify-between border-b-2 p-2 items-center fixed w-full h-14">
      <SearchForm />
    </div>
  );
}
