import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";
import "./Pages.css";
import Auth from "../utils/auth";

import { QUERY_ME } from "../utils/queries";
import {
  UPDATE_ABOUT,
  UPDATE_LOCATION,
  UPDATE_EMAIL,
  UPDATE_PHONE,
} from "../utils/mutations";

const Myprofile = () => {
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [updateMyAbout] = useMutation(UPDATE_ABOUT);
  const [updateMyLocation] = useMutation(UPDATE_LOCATION);
  const [updateMyPhone] = useMutation(UPDATE_PHONE);
  const [updateMyEmail] = useMutation(UPDATE_EMAIL);

  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { profileId: profileId },
  });

  const profile = data?.me || data?.profile || {};
  //if not logged in
  if (!data?.me || data?.profile) {
    return (
      <h4>
        You need to be logged in to see your profile page.
        <br />
        <Link to="/login">Login Here!</Link> or{" "}
        <Link to="/signup">Signup Here!</Link>
      </h4>
    );
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateMyAbout({
        variables: { profileId: data.me._id, about },
      });

      setAbout("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleFormSubmit2 = async (event) => {
    event.preventDefault();
    try {
      await updateMyLocation({
        variables: { profileId: data.me._id, location },
      });

      setLocation("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleFormSubmit3 = async (event) => {
    event.preventDefault();
    try {
      await updateMyEmail({
        variables: { profileId: data.me._id, email },
      });

      setEmail("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleFormSubmit4 = async (event) => {
    event.preventDefault();
    try {
      await updateMyPhone({
        variables: { profileId: data.me._id, phone },
      });

      setPhone("");
    } catch (err) {
      console.error(err);
    }
  };
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId)
    return <Redirect to="/me:/profileId" />;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Profile</h1>
      <div className="myInfo">
        <img className="profilePic" src={`/images/${profile.img}`} alt="text" />

        <h3 className="profileTitle">About:</h3>
        <form
          className="flex-column justify-center-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-6">
            <textarea
              placeholder={profile.about}
              value={about}
              className="aboutInput w-100"
              onChange={(event) => setAbout(event.target.value)}
            />
          </div>
          <div className="col-12 col-lg-3">
            <button
              className="updateBtn btn btn-info btn-inline py-3"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>

        <h3 className="profileTitle">Location:</h3>
        <form
          className="flex-column justify-center-md align-center"
          onSubmit={handleFormSubmit2}
        >
          <div className="col-12 col-lg-6">
            <input
              placeholder={profile.location}
              value={location}
              className="w-100"
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className="col-12 col-lg-3">
            <button
              className="updateBtn btn btn-info btn-inline py-3"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
        <h3 className="profileTitle">Contact Info:</h3>
        <form
          className="flex-column justify-center-md align-center"
          onSubmit={handleFormSubmit3}
        >
          <div className="col-12 col-lg-6">
            <p> Email</p>
            <input
              type="email"
              placeholder={profile.email}
              value={email}
              className="w-100"
              onChange={(event) => setEmail(event.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="col-12 col-lg-3">
            <button
              className="updateBtn emailBtn btn btn-info btn-inline py-3"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
        <form
          className="flex-column justify-center-md align-center"
          onSubmit={handleFormSubmit4}
        >
          <div className="col-12 col-lg-6">
            <p>
              Phone (<span className="phoneFormat">###-###-####</span>)
            </p>
            <input
              type="text"
              placeholder={profile.phone}
              value={phone}
              className="w-100"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="col-12 col-lg-3">
            <button
              className="updateBtn btn btn-info btn-inline py-3"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
        <h3 className="profileTitle">Specializations and Skill Sets:</h3>
        {profile.skills?.length > 0 && (
          <SkillsList skills={profile.skills} isLoggedInUser={true} />
        )}

        <div
          className="addSkill my-4 p-4"
          style={{
            border: "1px solid #1a1a1a",
            borderRadius: "5px",
            backgroundColor: "lightslategray",
          }}
        >
          <SkillForm profileId={profile._id} />
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
