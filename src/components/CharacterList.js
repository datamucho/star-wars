import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleChar from "./SingleChar";
import Pagination from "./Pagination";
import Search from "./Search";

const CharacterList = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = `https://swapi.dev/api/people/?page=${pageIndex}`;
    const fetchChars = () => {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(setLoading(false));
    };

    fetchChars();
    console.log("data: ", data);
  }, [pageIndex]);

  if (loading) {
    return <h1 style={{ color: "#fff" }}>loading...</h1>;
  }

  return (
    <div className="hp">
      <Search
        inp={(event) => setSearchTerm(event.target.value)}
        data={data}
        searchTerm={searchTerm}
      />
      <div className="row">
        {data &&
          data.results.map((item, idx) => (
            <div key={`id:${idx}`}>
              <SingleChar
                name={item.name}
                birth={item.birth_year}
                gender={item.gender}
                id={item.url.match(/(\d+)/)[0]}
              />
            </div>
          ))}
      </div>
      <Pagination
        next={() => setPageIndex((prevState) => prevState + 1)}
        id={pageIndex}
        back={() => setPageIndex((prevState) => prevState - 1)}
      />
    </div>
  );
};

export default CharacterList;
