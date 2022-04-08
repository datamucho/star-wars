import React from "react";

const Pagination = ({ next, back, id, setPage }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="pagination">
      {id > 1 && (
        <button onClick={() => setPage(id - 1)} className="btn">
          Back
        </button>
      )}

      <div className="pages">
        {pages.map((item) =>
          item === id ? (
            <button className="btn-curr" onClick={() => setPage(item)}>
              {item}
            </button>
          ) : (
            <button className="btn" onClick={() => setPage(item)}>
              {item}
            </button>
          )
        )}
      </div>

      {id < 9 && (
        <button onClick={() => setPage(id + 1)} className="btn">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
