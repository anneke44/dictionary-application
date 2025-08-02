import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Search submitted!");
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
