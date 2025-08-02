import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${keyword}`);
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
