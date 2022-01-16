import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../../utils/queries";
// import ProfileList from "../ProfileList";

export default function CarouselComponent() {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <div className="profileListCont">
      <h3>Search for a mechanic by issue...</h3>

      <div className="searchForm input-group">
        <div className="searchFormInput form-outline">
          <input
            type="search"
            id="issueInput"
            className="form-control"
            placeholder="i.e. engine, transmission, body work, etc."
          />
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      {/* Back up styling for <div> immediately below */}
      {/* className="flex-row justify-space-between my-4" */}
      <div>
        <Carousel
          centerMode
          showStatus={false}
          dynamicHeight={false}
          emulateTouch
          swipeScrollTolerance={50}
          centerSlidePercentage={30}
          showThumbs={false}
          infiniteLoop
          showIndicators
        >
          {profiles &&
            profiles.map((profile) => (
              // Back up styling for <div> immediately below
              // className="card col-12 col-xl-6"
              <div className="card" key={profile._id}>
                <div className="card-body">
                  <img className="cardImg" src={`/images/${profile.img}`} alt="text" />
                  <h3 className="card-title">
                    {profile.firstName} {profile.lastName} <br />
                    <span className="mechLoc">
                      Location: {profile.location}
                    </span>
                  </h3>
                  <Link
                    className="seeProfileBtn btn btn-primary"
                    to={`/profiles/${profile._id}`}
                  >
                    See profile
                  </Link>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
