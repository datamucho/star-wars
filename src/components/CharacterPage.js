import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CharacterPage = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchChar = () => {
      const url = `https://swapi.dev/api/people/${id}`;
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setChar(res.data);
          console.log("res ", res);
        })
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    };
    fetchChar();
    console.log("data: ", char);
  }, []);
  if (loading) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <div className="char-page">
      {char && (
        <div className="char-info">
          <h1>{char.name}</h1>
          <div style={{ textAlign: "left" }}>
            <p>Gender: {char.gender}</p>
            <p>Birth: {char.birth_year}</p>
            <p>Skin color: {char.skin_color}</p>
            <p>eye_color: {char.eye_color}</p>
            <p>height: {char.height}</p>
            <p>mass: {char.mass}</p>
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
