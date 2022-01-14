import React from "react";

// Import the `useParams()` hook
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";
import "./Pages.css";
import Auth from '../utils/auth';


import { QUERY_ME } from "../utils/queries";

const Myprofile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { profileId } = useParams();

  const { loading, data } = useQuery(
    QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // const profile = data?.profile || {};
  const profile = data?.me || data?.profile || {};
  console.log(data?.me || data?.profile)
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId)
    return <Redirect to="/me:/profileId" />;


  if (loading) {
    return <div>Loading...</div>;
  }

  //   return (
  //     <h4>
  //       You need to be logged in to see your profile page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <h3>
        About Me: {profile.firstName} {profile.lastName}:
      </h3>
      <p contenteditable="true">
        {profile.about} 
      </p>
      <h3>My Location:</h3>
      <p contenteditable="true">{profile.location}</p>
      <h3>My Contact Info</h3>
      <p contenteditable="true">{profile.email} </p>
      <h3 className="card-header">My Specializations and Skill Sets</h3>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-4 p-4" style={{ border: "1px solid #1a1a1a", borderRadius: "5px", backgroundColor: "lightslategray" }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Myprofile;
