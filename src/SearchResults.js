import React from "react";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="Definitions">
        <h2>{props.searchResults.word}</h2>
        {props.searchResults.meanings.map(function (meaning, index) {
          return meaning[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
