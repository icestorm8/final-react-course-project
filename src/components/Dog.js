import { React, useContext } from "react";
import { useParams } from "react-router-dom";

export default function Dog(props) {
  let params = useParams(); // fetch dog's name from url

  var dog = props.data.find((dog) => dog.name == params.dogName);

  console.log(dog);
  return (
    <div>
      <div className="container-fluid p-5 d-flex flex-row gap-4 ">
        <div className="col-6">
          {/* buttons */}
          <div className="btn-group flex-row">
            <button className="btn btn-danger">DELETE</button>
            <button className="btn btn-info">EDIT</button>
          </div>
          {/* dog extended info */}
          <h1 className="display-4 ">{dog.name}</h1>
          <div className="">
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
