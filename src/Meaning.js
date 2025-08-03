import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong> {props.meaning.definition}
      <br />
      <strong>Example:</strong> <em>{props.meaning.example}</em>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
