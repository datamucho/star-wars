import React, { useState } from "react";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import CharacterList from "../components/CharacterList";
import useFetch from "../api/useFetch";

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, loading, error } = useFetch(
    `https://swapi.dev/api/people/?page=${pageIndex}`
  );

  if (loading) {
    return <h1 style={{ color: "#fff" }}>loading...</h1>;
  }

  return (
    <div className="hp">
      <Search data={data} />

      <CharacterList data={data} />

      <Pagination
        next={() => setPageIndex((prevState) => prevState + 1)}
        id={pageIndex}
        setPage={(id) => {
          setPageIndex(id);
        }}
        back={() => setPageIndex((prevState) => prevState - 1)}
      />
    </div>
  );
};

export default Home;
