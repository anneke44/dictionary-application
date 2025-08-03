import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let picApiKey = "04f3tf2c9f9bboc83b5050dcf54e2f1a";
    let picApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picApiKey}`;

    axios.get(picApiUrl).then(getImages);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setResults(response.data);
  }
  function getImages(response) {
    setPhotos(response.data.photos);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <div className=" d-flex align-items-center justify-content-center gap-3">
              <div>
                <input
                  type="search"
                  id="search-input"
                  className="search-control "
                  placeholder={props.defaultKeyword}
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
