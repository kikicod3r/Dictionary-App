import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech} </h3>
      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
      <p>{props.meaning.definition} </p>
      <p>example: {props.meaning.example} </p>
    </div>
  );
}
