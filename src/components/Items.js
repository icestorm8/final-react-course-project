import React, { createContext, useContext } from "react";
import SearchBar from "./SearchBar";
import { useEffect, useState, useId } from "react";
import Card from "./Card";

import { Link, Outlet } from "react-router-dom";
import { DogArray } from "../functions/fetchData";

export default function Items() {
  // fetch data logic
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(DogArray.length == 0); // was data fetched?
  const [error, setError] = useState(DogArray == null);
  const [filteredData, setfilteredData] = useState(DogArray);

  useEffect(() => {
    setLoading(DogArray.length == 0);
  }, [loading]);
  // useEffect(() => {
  //   // listen to changes of state when function is called
  //   fetchData(props.setData, setLoading, setError);
  // }, []);

  // don't want to loose my data when searching
  // useEffect(() => {
  //   setfilteredData(props.data);
  // }, [props.data]);

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

  return (
    <div>
      {loading ? (
        <div className="position-absolute top-50 start-50">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <>
          <div className="m-5">
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
          </div>
          <div className="container d-flex flex-wrap gap-4 justify-content-center p-2">
            {/* items here */}
            {filteredData.map((item, index) => (
              <Link to={`/items/${item.name}`}>
                <Card key={index} dog={item}></Card>
              </Link>
            ))}
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
