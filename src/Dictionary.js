import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-5">
      <h2 className="mb-5">Dictionary</h2>
      <form className="Search-form mb-5" onSubmit={search}>
        <input
          className="Search-box"
          type="search"
          placeholder="Lookup a word..."
          onChange={handleKeywordChange}
        ></input>
        <input className="Search-button" type="submit"></input>
      </form>
    </div>
  );
}
