import React, { useEffect, useState } from "react";
import { DogArray, setDogArray } from "../functions/fetchData";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let params = useParams(); // fetch dog's name from url
  var dog = DogArray.find((dog) => dog.name == params.dogName);
  // var copy = structuredClone(dog); // create a copy/ clone for dog
  const navigate = useNavigate(); // navigate
  var [copy, setCopy] = useState(structuredClone(dog));
  var [isChanged, setIsChanged] = useState(false);

  if (!dog) {
    // wasn't found - something wen't wrong and user shouldn't be on this page
    console.log("access denied");
    return <Navigate to="/items"></Navigate>;
  }

  async function handleChange(e, keyName) {
    await setIsChanged(true);
    console.log(`change was made in ${e.target.name}`); // check were change was made
    await setCopy({ ...copy, [keyName]: e.target.value });
  }

  function cancel(e) {
    e.preventDefault(); // "form submission canceled because the form is not connected"
    navigate(`/Items/${dog.name}`); // go back to dog (without reloading)
  }

  function saveEdit(e) {
    e.preventDefault();
    if (isChanged) {
      //create dog object, check if both are the same, if not replace, if same - message

      // save the changes made on copy to dog (in array)
      console.log(copy["image_link"]);
      Object.keys(dog).forEach(function (key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object

        dog[key] = copy[key];
      });
      setIsChanged(false);
      // console.log(dog);
      alert("changes were saved");
      //   alert("changes were saved, youll be redirected back to this dog's page");
      navigate(`/Items/${dog.name}`);
    } else {
      alert("no changes were made, closing form");
      cancel(e); // can do a box with options = stay in form or go back
    }
  }
  return (
    <div>
      <h1 className="display-4 text-center">
        {params.dogName}
        <span className="btn btn-danger m-3">edit mode</span>
      </h1>
      <form
        className="container d-flex flex-column p-3"
        onSubmit={(e) => saveEdit(e)}
      >
        {/* displaying as input fields all keys and values except for name and image url */}
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
              min={1}
              minLength={1}
              defaultValue={keyName == "image_link" ? "" : dog[keyName]}
              name={keyName}
              className="form-control "
              placeholder={dog[keyName]}
              onChange={(e) => {
                handleChange(e, keyName);
              }} // mark if there was even one change in form
            />
          </div>
        ))}

        <div className="btn-group">
          <button className="btn btn-danger" onClick={(e) => cancel(e)}>
            cancel
          </button>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
