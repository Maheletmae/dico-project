import React, { useState } from "react";
import "./DicoSearch.css";

export default function DicoSearch() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition..`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="DicoSearch">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
    </div>
  );
}
