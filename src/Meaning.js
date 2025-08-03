import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>Definition:</h4>
      <p>{props.meaning.definition}</p>
      <h4>example:</h4>
      <p>{props.meaning.example}</p>
    </div>
  );
}
