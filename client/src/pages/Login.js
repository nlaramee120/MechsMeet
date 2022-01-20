import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import "./Pages.css"

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      {/* <Link to="/signup">← Go to Signup</Link> */}

      <h1>Log In</h1>
      <h2>Don't have an account? <Link className="btn btn-info" to="/signup">
          <h1 className="m-1" style={{ fontSize: "1rem", textAlign: "center" }}>
            Start offering your services now!
          </h1>
        </Link></h2>
      <form className="formCont" onSubmit={handleFormSubmit}>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input className="inputField"
            placeholder="email@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="formItem flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input className="inputField"
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button className="formBtn m-1 text-dark" style={{ fontSize: "1rem" }} type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;