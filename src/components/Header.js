import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="d-flex flex-column">
      <span className="text-light bg-dark text-center p-2 display-6">
        {/* logo and name here */}
        Shakedt
      </span>

      {/* nav bar here */}
      <NavBar></NavBar>
    </header>
  );
}
