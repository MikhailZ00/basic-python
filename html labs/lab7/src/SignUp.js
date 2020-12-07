import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import "./App.css";
import {
  Link
} from "react-router-dom";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div> <div className="SignOutHome">
    <Link to="/" className="btn btn-outline-light" role="button" aria-pressed="true">Back</Link>
  </div>
    <div className="card card-body col-3 mx-auto marginTop">
      <h2 className="pl-2">Sign up</h2>
      <form onSubmit={handleSignUp}>
      <label className="pr-4">
          <input className="form-control" name="Name" type="text" placeholder="Name" />
        </label>
        <label className="pr-4">
          <input className="form-control" name="email" type="email" placeholder="Email" />
        </label>
        <label className="pr-4">
          <input className="form-control" name="password" type="password" placeholder="Password" />
        </label>
        <label className="PaddingFile">
        <input type="file" class="fileInHidden" id="fileAdd"/>
        <div class="addFile">
        <label for="fileAdd" className="btn btn-light card card-body AddFileFat">
          Choose file
        </label>
        </div>
        </label>
        <div class="buttons">
        <button type="submit" className="btn btn-outline-secondary">Sign Up</button>
        <Link to="/login" className="btn btn-outline-secondary" role="button" aria-pressed="true">Go to LogIn</Link>
      </div>
      </form>
    </div>
    </div>
  );
};

export default withRouter(SignUp);
