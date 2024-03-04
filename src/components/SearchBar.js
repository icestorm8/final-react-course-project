import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <div className="input-group justify-content-center">
      <div className="form-outline" data-mdb-input-init>
        <input
          type="search"
          id="search"
          placeholder="search item here"
          className="form-control"
        />
      </div>
      <button type="button" className="btn btn-primary" data-mdb-ripple-init>
        <FaSearch />
      </button>
    </div>
  );
}
