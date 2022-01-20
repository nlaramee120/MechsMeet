import React from "react";
import Dropbox from "../components/Dropbox";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SkillsList from "../components/SkillsList";
import "./Pages.css";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="payMechCont">
        <p class="payText">Have services been completed?</p>

        <Dropbox />
      </div>

      <div className="mechInfo">
        <h3>
          About {profile.firstName} {profile.lastName}:
        </h3>
        <p>{profile.about}</p>
        <h3>Location:</h3>
        <p>{profile.location}</p>
        <h3>Contact Info:</h3>
        <p>
          {profile.email}
          <br></br>
          {profile.phone}{" "}
        </p>
        <h3>Specializations and Skill Sets</h3>

        {profile.skills?.length > 0 && (
          <SkillsList skills={profile.skills} isLoggedInUser={false} />
        )}
      </div>
    </div>
  );
};

export default Profile;
