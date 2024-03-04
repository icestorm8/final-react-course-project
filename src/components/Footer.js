import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="pt-3 bg-secondary bg-gradient text-white text-center">
      {/* footer content will be here */}
      <div className="row">
        <div className="col-12 ">
          <p className="small">shaked tamam</p>
          <p className="small">2024</p>
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
          <a className="icon-link p-3" target="_blank" href="#!" role="button">
            <FaLinkedin className="text-white"></FaLinkedin>
          </a>
        </div>
      </div>

      <div className="bg-dark">
        <p className="p-2">&copy; all rights reserved to shaked tamam</p>
      </div>
    </footer>
  );
}
