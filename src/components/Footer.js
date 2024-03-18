import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="container-fluid pt-3 bg-secondary bg-gradient text-white text-center overflow-hidden">
      {/* footer content will be here */}
      <div className="row">
        <div className="col-12 ">
          <p className="small m-0">shaked tamam 2024</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 display-6 ">
          {/* github */}
          <a
            className="icon-link p-3"
            target="_blank"
            href="https://github.com/icestorm8"
            role="button"
          >
            <FaGithub className="text-white"></FaGithub>
          </a>
          {/* linkedin */}
          <a
            className="icon-link p-3"
            target="_blank"
            href="https://www.linkedin.com/in/shaked-tamam-0780b42ab/"
            role="button"
          >
            <FaLinkedin className="text-white"></FaLinkedin>
          </a>
        </div>
      </div>

      <div className="row bg-dark">
        <p className="p-2">&copy; all rights reserved to shaked tamam</p>
      </div>
    </footer>
  );
}
