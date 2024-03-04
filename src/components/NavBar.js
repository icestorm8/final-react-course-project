import React from "react";

export default function NavBar() {
  return (
    <nav className="gap-4 nav justify-content-center bg-secondary">
      {/* <a className="navbar-brand" href="#">
        ShakedT
      </a> */}
      <a className=" nav-link nav-item text-light" href="/home">
        Home
      </a>
      <a className="nav-link nav-item text-light" href="/about">
        About
      </a>
      <a className="nav-link nav-item text-light" href="/items">
        Items
      </a>
      <a className="nav-link nav-item text-light" href="/createItem">
        Create Item
      </a>
    </nav>
  );
}
