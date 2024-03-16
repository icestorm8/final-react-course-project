import { React, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DogArray, setDogArray } from "../functions/fetchData";

import { useNavigate } from "react-router-dom";

function deleteDog(dogName) {
  setDogArray(DogArray.filter((dog) => dog.name !== dogName));
  console.log(DogArray);
}

export default function Dog() {
  let params = useParams(); // fetch dog's name from url
  // search for specific dog by it's name in the doglist data array
  var dog = DogArray.find((dog) => dog.name == params.dogName);

  console.log(dog);
  const navigate = useNavigate();
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
                navigate("/Items");
              }}
            >
              DELETE
            </button>
            <button className="btn btn-info">EDIT</button>
          </div>
          {/* dog extended info */}
          <h1 className="display-4 ">{dog.name}</h1>
          <div className="">
            {/* displaying as list all keys and values except for name and image url */}
            {Object.keys(dog).map((keyName, index) =>
              keyName == "image_link" || keyName == "name" ? (
                <></>
              ) : (
                <li className="lead btn-group p-2 d-block" key={index}>
                  <span className="btn btn-info">
                    <strong>{keyName.split("_").join(" ")}</strong>
                  </span>
                  <span className="btn btn-outline-info">{dog[keyName]}</span>
                </li>
              )
            )}
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
