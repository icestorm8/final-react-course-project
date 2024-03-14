import React from "react";

export default function About() {
  return (
    <div className="container-fluid p-5 d-flex flex-row gap-4 ">
      <div className="col-6">
        <h1 className="display-3 ">nice to meet you!</h1>
        <p>
          my name is shaked, i was asked to make this site/ react app as a final
          project for react course i took in Handesaim Ariel. This site will be
          about dogs. I chose this subject because i couldn't find any other
          interesting api and it was a cute one. also, i like dogs.
        </p>
      </div>
      <div className="col-6 d-flex align-items-center">
        <img
          className="img-fluid rounded float-right"
          src="https://media.cnn.com/api/v1/images/stellar/prod/191006152638-01-pets-and-our-health.jpg?q=w_2000,h_1125,x_0,y_0,c_fill/h_618"
          alt="dog picture"
        ></img>
      </div>
    </div>
  );
}
