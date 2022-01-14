import React from "react";
import { Link } from "react-router-dom";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import "./Pages.css";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

import StripeButton from "../components/Stripe/script";

const Profile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
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

      <button
        onClick={StripeButton}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay {profile.firstName} {profile.lastName}
      </button>
      </div>

      <div className="mechInfo">
        <h3>
          About {profile.firstName} {profile.lastName}:
        </h3>
        <p>{profile.about}</p>
        <h3>Location:</h3>
        <p>{profile.location}</p>
        <h3>Contact</h3>
        <p>{profile.email}</p>
        <h3 className="card-header">Specializations and Skill Sets</h3>

        {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}
      </div>
    </div>
  );
};

export default Profile;
