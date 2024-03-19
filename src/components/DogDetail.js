import { React, useContext } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { DogArray, setDogArray } from "../functions/fetchData";

import { useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function deleteDog(dogName) {
  setDogArray(DogArray.filter((dog) => dog.name !== dogName));
  console.log(DogArray);
}

export default function Dog() {
  let params = useParams(); // fetch dog's name from url
  // search for specific dog by it's name in the doglist data array
  var dog = DogArray.find((dog) => dog.name == params.dogName);

  const navigate = useNavigate();
  if (!dog) {
    // Redirect to the items page if the dog is not found
    return <PageNotFound />;
  } else {
    return (
      <div>
        <div className="container-fluid p-5 d-flex flex-row gap-4 ">
          <div className="col-6">
            {/* buttons */}
            <div className="btn-group flex-row">
              <button
                // to="/Items"
                className="btn btn-danger"
                onClick={() => {
                  deleteDog(params.dogName);
                  navigate("/items"); // instead of history
                }}
              >
                DELETE
              </button>
              {/* without using / before it addes to what's currently there */}
              <Link to={`editDog`} className="btn btn-info">
                EDIT
              </Link>
            </div>
            {/* dog extended info */}
            <h1 className="display-4 ">{dog.name}</h1>
            <div>
              {/* displaying as list all keys and values except for name and image url */}
              {Object.keys(dog).map((keyName, index) => {
                return keyName == "image_link" || keyName == "name" ? null : (
                  <li
                    key={keyName + index}
                    className="lead btn-group p-2 d-block"
                  >
                    <span className="btn btn-info">
                      <strong>{keyName.split("_").join(" ")}</strong>
                    </span>
                    <span className="btn btn-outline-info">{dog[keyName]}</span>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="col-6 d-flex align-items-start">
            {/* dog's picture */}
            <img
              className="img-fluid rounded float-right"
              src={dog.image_link}
              alt="dog picture"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
