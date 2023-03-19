import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchForm() {
  const {keyword} = useParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(keyword){
      setSearch(keyword);
    }else{
      setSearch("");
    }
  }, [keyword])
  const clickSearch = (e) => {
    e.preventDefault();
    if(search.trim() === ""){
      return
    }else{
      navigate(`videos/${search.trim()}`);
    }

  }

  return (
    <form  className="w-full flex justify-center" onSubmit={clickSearch}>
      <input
        type="text"
        className="w-7/12 p-2 outline-none bg-black text-gray-50"
        placeholder="검색어를 입력해주세요.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit"  className=" bg-zinc-600 px-4">
        <BiSearch/>
      </button>
    </form>
  );
}
