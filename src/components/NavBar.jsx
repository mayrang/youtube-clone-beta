import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { BsYoutube } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="flex bg-header-gray justify-between py-2 px-4  items-center fixed w-full h-14 ">
      <Link to={"/"} className="font-semibold ">
        <BsYoutube className="inline text-2xl mr-1 text-red-500" />
        Hanbatube
      </Link>
      <SearchForm />
    </div>
  );
}
