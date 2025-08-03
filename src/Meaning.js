import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <br />
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <div className="definition"> {props.meaning.definition}</div>
        <br />
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
