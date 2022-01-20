import React from "react";
import { Link } from "react-router-dom";
import "./ProfileList.css";

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div className="profileListCont">
      <h3>{title}</h3>

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

      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div className="card col-12 col-xl-6" key={profile._id}>
              <div className="card-body">
                <h3 className="card-title">
                  {profile.firstName} {profile.lastName} <br />
                  <span className="mechLoc">Location: {profile.location}</span>
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
    </div>
  );
};

export default ProfileList;
