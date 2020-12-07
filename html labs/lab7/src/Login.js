import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import "./App.css";
import {
  Link
} from "react-router-dom";


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home"/>;
  }
  else


  return (
    <div>
      <div className="SignOutHome">
    <Link to="/" className="btn btn-outline-light" role="button" aria-pressed="true">Back</Link>
  </div>
    <div className="card card-body col-3 mx-auto marginTop">  
      <h2 className="pl-2">Log in</h2>
      <form onSubmit={handleLogin}>
        <label className="pr-4">
          <input className="form-control" name="email" type="email" placeholder="Email" />
        </label>
        <label className="pr-4">
          <input className="form-control" name="password" type="password" placeholder="Password" />
        </label>
        <div class="buttons">
        <button type="submit" className="btn btn-outline-secondary">Log in</button>
        <Link to="/signup" className="btn btn-outline-secondary" role="button" aria-pressed="true">Go to SignUp</Link>
      </div>
      </form>
    </div>
    </div>
  );
};

export default withRouter(Login);
