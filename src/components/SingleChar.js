import React from "react";
import { Link } from "react-router-dom";

const SingleChar = ({ name, gender, birth, id }) => {
  return (
    <div className="single-char">
      <Link to={`/${id}`}>
        <h1>{name}</h1>
        <p>Gender: {gender}</p>
        <p>Birth year: {birth}</p>
      </Link>
    </div>
  );
};

export default SingleChar;
