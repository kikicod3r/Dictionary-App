import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setSearchResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
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

      <SearchResults searchResults={searchResults} />
    </div>
  );
}
