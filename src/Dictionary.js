import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <div className=" d-flex align-items-center justify-content-center gap-3">
            <div>
              <input
                type="search"
                id="search-input"
                className="search-control "
                placeholder="Enter search..."
                onChange={handleKeywordChange}
              />
            </div>
            <div>
              <input
                type="submit"
                value="Search"
                className="search-submit btn"
              />
            </div>
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
