import React from "react";

export default function About() {
  return (
    <div className="container-fluid p-5 d-flex flex-row gap-4 ">
      <div className="col-6">
        <h1 className="display-3 ">nice to meet you!</h1>
        <p>
          my name is shaked, i was asked to make this site/ react app as a final
          project for react course i took in Handesaim Ariel. This site will be
          about edible plants. I chose this subject because in the past i
          enjoyed being in the garden a lot, especialy enjoyd collecting seeds
          of edible plants and growing them from 0.
        </p>
      </div>
      <div className="col-6 d-flex align-items-center">
        <img
          className="img-fluid rounded float-right"
          src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-cherry-tomatoes-growing-in-a-garden-royalty-free-image-543586990-1531260958.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
        ></img>
      </div>
    </div>
  );
}
