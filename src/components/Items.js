import React, { createContext } from "react";
import SearchBar from "./SearchBar";
import { useEffect, useState, useId } from "react";
import Card from "./Card";
import { fetchData } from "./functions/fetchData";

export default function Items() {
  // fetch data logic
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // was data fetched?
  const [error, setError] = useState(null);

  useEffect(() => {
    // listen to changes of state when function is called
    fetchData(setData, setLoading, setError);
  }, []);

  // search logic
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);
  return (
    <div>
      {loading ? (
        <div className="position-absolute top-50 start-50">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : error ? (
        <p> Error: {error} </p>
      ) : (
        <>
          <div className="m-5">
            <SearchBar setInput={setSearchTerm}></SearchBar>
          </div>
          <div className="container d-flex flex-wrap gap-4 justify-content-center p-2">
            {/* items here */}
            {data.map((item, index) => (
              <Card key={index} dog={item}></Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
