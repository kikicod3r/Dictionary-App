import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [searchResults, setSearchResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setSearchResults(response.data);
  }

  function search() {
    let apiKey = "1687841bccf274a08foafbat6c3f1ff0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="mb-5">
          <strong>Dictionary</strong>
        </h1>
        <section>
          <form className="Search-form mb-5" onSubmit={handleSubmit}>
            <input
              className="Search-box"
              type="search"
              placeholder="Lookup a word..."
              onChange={handleKeywordChange}
            ></input>
          </form>
        </section>

        <SearchResults searchResults={searchResults} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
