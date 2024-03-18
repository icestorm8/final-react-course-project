import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./comps css/home.css";
export default function Home() {
  return (
    <>
      <div className="bg-image"></div>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <h1 className="display-1 ">site name here</h1>
        <h3 className="display-4">submitted by: shaked tamam</h3>
        <Link to="/items" role="button" className="btn btn-primary">
          Search Items
        </Link>
        <Outlet></Outlet>
      </div>
    </>
  );
}
