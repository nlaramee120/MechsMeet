import { Link } from "react-router-dom";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <h1>MechsMeet</h1>
      <div className="intro1">
        <img className="intro1pic" src="/images/group1.jpg" alt="text" />
        <div className="intro1text">
          <h3>Guest looking for a man in uniform?</h3>
          <br></br>
          <p>
            When it comes to car issues, this app answers the notorious
            question, "Do you know someone who knows a mechanic who might know
            what's wrong with my car and can help?"<br></br>
            <br></br>
            Connect with local mechanics who can offer a plethera of services
            you might need and pay them directly from the app.
          </p>
          <br></br>
          <Link className="btn btn-primary" to="/home">
            <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
              Start looking for mechanics!
            </h1>
          </Link>
        </div>
      </div>
      <div className="intro2">
        <img className="intro2pic" src="/images/group3.jpg" alt="text" />
        <div className="intro2text">
          <h3>Mechanic with services to offer?</h3>
          <br></br>
          <p>
            Looking to link up with locals who might be in need of your
            services? This is your one stop shop to connect with, meet with, and
            solve all their issues.<br></br>
            <br></br>
            -Create an account<br></br>
            -Tell em' about yourself and experience<br></br>
            -List your specialties and skills<br></br>
            -Wait for them to come knockin' at your garage!
          </p>
          <br></br>
          <Link className="btn btn-primary" to="/signup">
            <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
              Start offering your services!
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
