import React, { createContext, useContext } from "react";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Card from "./Card";

import { Link, Outlet } from "react-router-dom";
import { DogArray, hasError } from "../functions/fetchData";

export default function Items() {
  // display fetched data

  const [filteredData, setfilteredData] = useState(DogArray);
  var hasData =
    DogArray != null && DogArray instanceof Array && DogArray?.length > 0; // check if the array we got has items
  const [hasSearchResults, setHasSearchResults] = useState(true);

  useEffect(() => {
    if (hasData) {
      setHasSearchResults(filteredData.length > 0);
    }
  }, [filteredData]);

  // search logic
  const [searchTerm, setSearchTerm] = useState("");
  // for checking changes in search term
  useEffect(() => {
    // console.log(searchTerm);
    if (searchTerm === "") {
      setfilteredData(DogArray);
    } else {
      setfilteredData(
        DogArray.filter(
          (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
        )
      );
    }
    // filter data
  }, [searchTerm]);
  // console.log(typeof DogArray);
  return (
    <div>
      {hasData ? (
        <>
          <div className="m-5">
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            <Link
              to="/items/createItem"
              className="btn btn-primary position-absolute top-0 end-0 m-4"
            >
              Create Item
            </Link>
          </div>
          {hasSearchResults && hasData ? (
            <div className="container d-flex flex-wrap gap-4 justify-content-center p-2">
              {/* items here */}

              {filteredData.map((item, index) => (
                <Link to={`/items/${item.name}`} key={index}>
                  <Card dog={item}></Card>
                </Link>
              ))}
              <Outlet />
            </div>
          ) : (
            <h1 className="text-center display-4">
              no items matched your search
            </h1>
          )}
        </>
      ) : hasError ? (
        <p className="lead text-center p-3 m-4 bg-danger text-white">
          there was an error fetching from the api, please content the creator
        </p>
      ) : (
        <div className="d-flex flex-column justify-content-center">
          <h1 className="text-center display-4">no data to show</h1>
          <Link to="/items/createItem" className="btn btn-primary m-4">
            Create Item
          </Link>
        </div>
      )}
    </div>
  );
}
