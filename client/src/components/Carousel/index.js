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
    <div>
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
      <Carousel>
        <div className="flex-row justify-space-between my-4">
          {profiles &&
            profiles.map((profile) => (
              <div className="card col-12 col-xl-6" key={profile._id}>
                <div className="card-body">
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
                    See mechanic profile
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </Carousel>
    </div>
  );
}
