import React from "react";

const Pagination = ({ next, back, id }) => {
  return (
    <div className="pagination">
      {id > 1 && (
        <button onClick={back} className="btn">
          Back
        </button>
      )}
      {id - 1 && (
        <button className="btn" onClick={back}>
          {id - 1}
        </button>
      )}
      {id && <button className="btn-curr">{id}</button>}
      {id + 1 && id < 9 && (
        <button className="btn" onClick={next}>
          {id + 1}
        </button>
      )}
      {id < 9 && (
        <button onClick={next} className="btn">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
