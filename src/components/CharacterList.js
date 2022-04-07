import React from "react";
import SingleChar from "./SingleChar";

const CharacterList = ({ data }) => {
  return (
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
  );
};

export default CharacterList;
