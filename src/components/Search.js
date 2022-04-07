import React from "react";
import { Link } from "react-router-dom";

const Search = ({ inp, data, searchTerm }) => {
  return (
    <div className="search">
      <input type="text" placeholder="Enter character..." onChange={inp} />
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
                <Link to={`/${item.url.match(/(\d+)/)[0]}`}>
                  <div key={idx} className="user">
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
