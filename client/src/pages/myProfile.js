import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";
import "./Pages.css";

import { QUERY_SINGLE_PROFILE } from "../utils/queries";

const Myprofile = () => {
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
      <h2>
        About Me {profile.firstName} {profile.lastName}:
      </h2>
      <p contenteditable="true">
        {profile.about} "Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </p>
      <h2>My Location:</h2>
      <p contenteditable="true">{profile.location} Chicago</p>
      <h2>My Contact Info</h2>
      <p contenteditable="true">{profile.email} test@gmail.com</p>
      <h2 className="card-header">My Specializations and Skill Sets</h2>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-4 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Myprofile;
