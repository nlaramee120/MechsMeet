import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PROFILE } from "../utils/mutations";
import "./Pages.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addProfile] = useMutation(ADD_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addProfile({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        img: "avatar.jpeg",
      },
    });
    const token = mutationResponse.data.addProfile.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <h1>Sign Up</h1>
      <h2>
        Already have an account? <Link to="/login">Log In</Link>
      </h2>
      <form className="formCont" onSubmit={handleFormSubmit}>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="firstName">First Name: </label>
          <input
            className="inputField"
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="inputField"
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            className="inputField"
            placeholder="email@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            className="inputField"
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button
            className="formBtn m-1 text-dark"
            style={{ fontSize: "1rem" }}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
