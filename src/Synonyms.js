import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              {index > 0 ? ", " : " "}
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
