import React from "react";
import Card from "./Card";
import movies from "../movies";

function createCard(movies) {
  return (
    <div className="col-sm">
      <Card
        img={movies.imgURL}
        title={movies.title.substring(0, 20)}
        summary={movies.summary.substring(0, 50) + "..."}
        watchLink={movies.watchLink}
      />
    </div>
  );
}

function Row() {
  return (
    <div>
      <center>
        <div className="container">
          <div className="row">{movies.map(createCard)}</div>
        </div>
      </center>
    </div>
  );
}

export default Row;
