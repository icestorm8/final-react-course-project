import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.commonName}</h1>
      <img src="{props.src}" alt={props.commonName}></img>
    </div>
  );
}
