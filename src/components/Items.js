import React from "react";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Items() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // was data fetched?
  const [error, setError] = useState(null);

  useEffect(() => {
    // listen to changes of state when function is called
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch data from the api
    // if there was an error during response to json display the error
    // if there were no errors - set loading state to false (finished loading)
    // save data just fetched to state
    try {
      const response = await fetch("");
      const data = await response.text();
      setData(data); // data is the name of array in this api
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

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
            <SearchBar></SearchBar>
          </div>
          <div className="card-deck">
            {/* items here */}
            {data.map((item) => (
              <Card
                key={item.id}
                commonName={item.common_name}
                src={item.default_image["original_url"]}
              ></Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
