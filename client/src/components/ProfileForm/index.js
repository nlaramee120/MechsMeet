import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_PROFILE } from "../../utils/mutations";
import { QUERY_PROFILES } from "../../utils/queries";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [name, setName] = useState("");

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    update(cache, { data: { addProfile } }) {
      try {
        const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

        cache.writeQuery({
          query: QUERY_PROFILES,
          data: { profiles: [...profiles, addProfile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { name },
      });

      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mechSignUp">
      <p className="mechSignUpText">Are you a mechanic?</p>
      <Link className="btn btn-info" to="/signup">
        <h1 className="m-1" style={{ fontSize: "1rem", textAlign: "center" }}>
          Start offering your services now!
        </h1>
      </Link>
      {error && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          Something went wrong...
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
