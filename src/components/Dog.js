import React from "react";
import { useParams } from "react-router-dom";

export default function Dog() {
  let params = useParams();
  console.log(params.dogName);
  return <div>{params.dogName}</div>;
}
