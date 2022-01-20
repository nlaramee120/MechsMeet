import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../../utils/queries";
import ProfileList from "../ProfileList";


export default function CarouselComponent() {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

 

  return (
    <div className="profileListCont">
      <h3>Search for a mechanic! </h3>    
      <div>
        <Carousel className="carouselProps"
          showStatus={false}
          dynamicHeight={false}
          emulateTouch
          swipeScrollTolerance={100}
          centerMode={true}
          centerSlidePercentage={90}
          showThumbs={false}
          infiniteLoop
          showIndicators
        >
          {profiles &&
            profiles.map((profile) => (
              <div className="cardCont" key={profile._id}>
                <div className="card-body">
                  <img
                    className="cardImg"
                    src={`/images/${profile.img}`}
                    alt="text"
                  />
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
