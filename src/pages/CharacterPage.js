import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../api/useFetch";

const CharacterPage = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://swapi.dev/api/people/${id}`
  );

  if (loading) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <div className="char-page">
      {data && (
        <div className="char-info">
          <h1>{data.name}</h1>
          <div style={{ textAlign: "left" }}>
            <p>Gender: {data.gender}</p>
            <p>Birth: {data.birth_year}</p>
            <p>Skin color: {data.skin_color}</p>
            <p>eye_color: {data.eye_color}</p>
            <p>height: {data.height}</p>
            <p>mass: {data.mass}</p>
          </div>
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
