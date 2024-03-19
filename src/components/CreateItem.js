import React, { useEffect, useState } from "react";
import { DogArray, setDogArray, hasError } from "../functions/fetchData";
import { Navigate } from "react-router-dom";

const initDogState = {
  image_link: "",
  barking: "",
  coat_length: "",
  drooling: "",
  energy: "",
  good_with_children: "",
  good_with_other_dogs: "",
  good_with_strangers: "",
  grooming: "",
  max_height_female: "",
  max_height_male: "",
  max_life_expectancy: "",
  max_weight_female: "",
  max_weight_male: "",
  min_height_female: "",
  min_height_male: "",
  min_life_expectancy: "",
  min_weight_female: "",
  min_weight_male: "",
  playfulness: "",
  protectiveness: "",
  shedding: "",
  trainability: "",
  name: "",
};

export default function CreateItem() {
  var [dog, setDog] = useState(initDogState);
  if (hasError) {
    // if has problem with the api fetching - don't allow creation of new items
    console.log("access denied");
    return <Navigate to="/items"></Navigate>;
  }

  // useEffect(() => {
  //   console.log(dog); // to check changes
  // }, [dog]);

  function handleSumbit(event) {
    event.preventDefault(); // prevent reloading of page
    // check object
    // add object to array using setDogArray
    setDogArray([dog, ...DogArray]); // adding the new dog at the start of the array so well see it on top
    // reset form
    setDog(initDogState); // clear form by reinitializing state!
    window.scrollTo(0, 0); // scroll up= top of page
    alert("dog added to list");
    // console.log(dog);
  }
  // console.log(DogArray[0]);
  return (
    <div className="container">
      <h1 className="display-4">create new dog item</h1>
      <form
        onSubmit={(event) => {
          handleSumbit(event);
        }}
      >
        {Object.keys(dog).map((keyName, index) => (
          <div className="input-group mb-3 " key={index}>
            <div className="input-group-prepend">
              <span className="btn btn-info">
                {keyName.split("_").join(" ")}
              </span>
            </div>
            <input
              type={
                keyName == "name"
                  ? "text"
                  : keyName == "image_link"
                  ? "url"
                  : "number"
              }
              onChange={(e) => {
                setDog((dog) => ({
                  ...dog, // Copy the old fields
                  [keyName]: e.target.value, // But override this one
                }));
              }}
              value={dog[keyName]} // so when reseting the state, the form will be cleaned
              // minLength={1}
              min={1}
              required
              name={keyName}
              className="form-control "
              placeholder={
                keyName === "name"
                  ? "for example - labrador"
                  : keyName === "image_link"
                  ? "for example https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg"
                  : "enter a number here"
              }
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          add item
        </button>
      </form>
    </div>
  );
}
