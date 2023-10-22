import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleResponse(response) {
    setSearchResults(response.data);
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
    <div className="Dictionary">
      <h1 className="mb-5">
        <strong>Dictionary</strong>
      </h1>
      <section>
        <form className="Search-form mb-5" onSubmit={search}>
          <input
            className="Search-box"
            type="search"
            placeholder="Lookup a word..."
            onChange={handleKeywordChange}
          ></input>
        </form>
      </section>
      <section>
        <SearchResults searchResults={searchResults} />
      </section>
    </div>
  );
}
