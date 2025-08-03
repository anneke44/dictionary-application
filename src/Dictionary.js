import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

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
    console.log(response.data);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center justify-content-center gap-3">
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
            <input type="submit" value="Search" className="search-submit btn" />
          </div>
        </div>
      </form>
    </div>
  );
}
