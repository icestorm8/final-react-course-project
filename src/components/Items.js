import React, { createContext, useContext } from "react";
import SearchBar from "./SearchBar";
import { useEffect, useState, useId } from "react";
import Card from "./Card";

import { Link, Outlet } from "react-router-dom";
import { DogArray } from "../functions/fetchData";
import { Button } from "bootstrap";

export default function Items() {
  // fetch data logic

  const [loading, setLoading] = useState(DogArray == null); // was data fetched?

  const [filteredData, setfilteredData] = useState(DogArray);
  var hasData = DogArray != null || DogArray?.length > 0; // check if the array we got has items
  const [hasSearchResults, setHasSearchResults] = useState(true);

  useEffect(() => {
    setLoading(DogArray.length == null);
  }, [loading]);

  useEffect(() => {
    setHasSearchResults(filteredData.length > 0);
  });

  // search logic
  const [searchTerm, setSearchTerm] = useState("");
  // for checking changes in search term
  useEffect(() => {
    console.log(searchTerm);
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
  console.log(DogArray);
  return (
    <div>
      {loading ? (
        <div className="position-absolute top-50 start-50">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <>
          {hasData ? (
            <>
              <div className="m-5">
                <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
              </div>
              {hasSearchResults && hasData ? (
                <div className="container d-flex flex-wrap gap-4 justify-content-center p-2">
                  {/* items here */}

                  {filteredData.map((item, index) => (
                    <Link to={`/items/${item.name}`}>
                      <Card key={index} dog={item}></Card>
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
          ) : (
            <h1 className="text-center display-4">no data to show</h1>
          )}
        </>
      )}
    </div>
  );
}
