import React from "react";
import "./comps css/navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    // ok, changed here from <a> to link, seems like link doesn't reload the page!
    <>
      <nav className="gap-4 nav justify-content-center bg-secondary">
        <Link to="/" className=" nav-link nav-item text-light">
          Home
        </Link>
        <Link to="/about" className="nav-link nav-item text-light">
          About
        </Link>
        <Link to="/items" className="nav-link nav-item text-light">
          Items
        </Link>
        {/* <Link to="/createitem" className="nav-link nav-item text-light">
          Create Item
        </Link> */}
      </nav>
      {/* used within the parent route element to indicate where a child route element should be rendered */}
      <Outlet />
    </>
  );
}
