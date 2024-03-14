import React from "react";
import "./comps css/404.css";
import { Link, Outlet } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found d-flex flex-column align-items-center p-3">
      <img
        className="p-3"
        width={300}
        src="https://images.prismic.io/tails/37a7f4da-3731-4744-87b7-76a31d4ebc68_Illustration%402x.png?auto=compress%2Cformat"
        alt="missing dog"
      ></img>
      <h1 className="display-1 text-center">404 - Page Not Found</h1>
      <p className="lead">
        oops! we couldn't find the page you were looking for :&#40;{" "}
      </p>

      <Link to="/" className="btn btn-primary">
        back to home
      </Link>
      {/* <Outlet></Outlet> */}
    </div>
  );
}
