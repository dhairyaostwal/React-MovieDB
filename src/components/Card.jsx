import React from "react";
// import movies from "../movies";

function Card(props) {
  return (
    <div className="card cardSpacing" style={{ width: "18rem" }}>
      <img className="card-img-top imgCard" src={props.img} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.summary}</p>
        <a href={props.watchLink} className="btn btn-primary">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Card;
