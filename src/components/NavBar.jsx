import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { BsYoutube } from "react-icons/bs";

export default function NavBar() {
  return (
    <header className="flex w-full p-4 text-2xl border-b border-zinc-600 mb-4 items-center ">
      <Link to={"/"} className="flex items-center">
        <BsYoutube className="text-4xl pt-1 text-youtube-red" />
        <h1 className="font-bold ml-2 text-3xl">Hanbatube</h1>
      </Link>
      <SearchForm />
    </header>
  );
}
