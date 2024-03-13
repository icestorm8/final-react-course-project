import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchBar(props) {
  const [input, setInput] = useState("");
  function handleClick() {
    props.setSearchTerm(input);
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div className="input-group justify-content-center">
      <div className="form-outline" data-mdb-input-init>
        <input
          onChange={handleChange}
          type="search"
          id="search"
          placeholder="search item here"
          className="form-control"
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-mdb-ripple-init
        onClick={handleClick}
      >
        <FaSearch />
      </button>
    </div>
  );
}
