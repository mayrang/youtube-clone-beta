import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  return (
    <form>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className="p-3  opacity-100 ">
        Search
      </button>
    </form>
  );
}
