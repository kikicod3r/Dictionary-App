import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props) {
  if (props.searchResults) {
    return (
      <div className="SearchResults">
        <h2>{props.searchResults.word}</h2>
        {props.searchResults.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
