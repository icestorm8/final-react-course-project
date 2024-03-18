import React, { useEffect, useState } from "react";
import { DogArray, setDogArray } from "../functions/fetchData";

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
  // since ill be here only when having at least one item fetched to my array from the api, i want to use this item's keys to create a new item
  // so i wouldn't miss any fields
  var [dog, setDog] = useState(initDogState);

  useEffect(() => {
    console.log(dog); // to check changes
  }, [dog]);

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
  console.log(DogArray[0]);
  return (
    <div className="container">
      <h1 className="display-4">create new dog item</h1>
      <form
        onSubmit={(event) => {
          handleSumbit(event);
        }}
      >
        {Object.keys(DogArray[0]).map((keyName, index) => (
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
              placeholder={"for example " + DogArray[0][keyName]}
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
