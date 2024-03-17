import React, { useEffect, useState } from "react";
import { DogArray, setDogArray } from "../functions/fetchData";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let params = useParams(); // fetch dog's name from url
  var dog = DogArray.find((dog) => dog.name == params.dogName);
  var copy = structuredClone(dog); // create a copy/ clone for dog

  const navigate = useNavigate(); // navigate

  var [isChanged, setIsChanged] = useState(false);

  function handleChange(e, keyName) {
    setIsChanged(true);
    console.log(`change was made in ${e.target.name}`); // check were change was made
    copy[keyName] = e.target.value;
    console.log(copy);
  }

  function cancel() {
    navigate(`/Items/${params.dogName}`); // go back to dog (without reloading)
  }

  function saveEdit() {
    if (isChanged) {
      //create dog object, check if both are the same, if not replace, if same - message
      //   dog = copy;
      // save the changes made on copy to dog (in array)
      Object.keys(dog).forEach(function (key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        dog[key] = copy[key];
      });
      console.log(dog);
      //   alert("changes were saved, youll be redirected back to this dog's page");
      navigate(`/Items/${params.dogName}`);
    } else {
      alert("no changes were made, closing form");
      cancel(); // can do a box with options = stay in form or go back
    }
  }
  return (
    <div>
      <h1 className="display-4 text-center">
        {params.dogName}
        <span className="btn btn-danger m-3">edit mode</span>
      </h1>
      <form className="container d-flex flex-column p-3">
        {/* displaying as input fields all keys and values except for name and image url */}
        {Object.keys(dog).map((keyName, index) =>
          keyName === "image_link" || keyName === "name" ? (
            <></>
          ) : (
            <div className="input-group mb-3 " key={index}>
              <div className="input-group-prepend">
                <span className="btn btn-info">
                  {keyName.split("_").join(" ")}
                </span>
              </div>
              <input
                type="number"
                min={1}
                defaultValue={dog[keyName]}
                name={keyName}
                className="form-control "
                placeholder={dog[keyName]}
                onChange={(e) => {
                  handleChange(e, keyName);
                }} // mark if there was even one change in form
              />
            </div>
          )
        )}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="btn btn-info">image_link</span>
          </div>
          <input
            type="url"
            name="image_link"
            className="form-control"
            placeholder={dog.image_link}
            onChange={(e) => handleChange(e, "image_link")}
          ></input>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={cancel}>
            cancel
          </button>
          <button className="btn btn-primary" onClick={saveEdit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}