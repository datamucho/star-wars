import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter character..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="s-results">
        {data &&
          data.results
            .filter((item) => {
              if (searchTerm === "") {
                return;
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, idx) => {
              return (
                <Link to={`/${item.url.match(/(\d+)/)[0]}`} key={idx}>
                  <div className="user">
                    <p>{item.name}</p>
                  </div>
                </Link>
              );
            })
            .slice(0, 4)}
      </div>
    </div>
  );
};

export default Search;
