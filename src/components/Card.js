import React from "react";
import "./comps css/card.css";
export default function Card(props) {
  return (
    <div className="card text-center">
      <img
        className="card-img-top"
        src={props.dog.image_link}
        width={300}
        alt={props.name}
      ></img>
      <h1 className="card-title h4 text-capitalize p-2">{props.dog.name}</h1>
      {console.log(props.dog)}
    </div>
  );
}
