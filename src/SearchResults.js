import React from "react";
import "./SearchResults.css";
import Meaning from "./Meaning";

export default function SearchResults(props) {
  if (props.searchResults) {
    return (
      <div className="SearchResults">
        <section className="SearchWord mb-5">
          {props.searchResults.word}
        </section>
        {props.searchResults.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
