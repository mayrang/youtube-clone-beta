import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  return (
    <form>
      <input
        type="text"
        className="border rounded-md p-2 w-96 bg-gray-200 text-black"
        placeholder="검색어를 입력해주세요.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="ml-3 px-2 py-2  opacity-100 border rounded-lg ">
        Search {<BiSearch className=" inline" />}
      </button>
    </form>
  );
}
