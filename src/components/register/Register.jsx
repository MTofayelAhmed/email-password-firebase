import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase.config";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmail = (event) => {
    // console.log(event.target.value);
  };

  const handleOnBlur = (event) => {
    // console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const password = event.target.password.value;
    const email = event.target.email.value;



    if (! /(?=.*[A-Z])/.test(password)) {
      setError("please add at least one upper case");
      return;
    } 
    
    else if (! /(?=.*[0-9].*[0-9])/.test(password)) {
      setError("please add at least 2 digit");
      return;
    }
    else if (password.length<6){
      setError('password should be at least 8 character')
      return;
    }

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        emailVerification(result.user)
        setSuccess("user has been created successfully");
        setError("");
        event.target.reset();
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const emailVerification = user =>{
    sendEmailVerification(user)
    .then(result =>{
      alert('please verify your email address')
    })
  }


  return (
    <div className="w-50 mx-auto ">
      <h2>Please register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-4 ps-2"
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="your Email"
          required
        />
        <br />
        <input
          className="w-50 mb-4 ps-2"
          onBlur={handleOnBlur}
          type="password"
          name="password"
          id="password"
          required
          placeholder="Your password"
        />
        <br />
        <p className="text-danger">{error}</p>
        <input className="btn btn-primary" type="submit" value="Submit" />
        <br />
        <p className="text-success">{success}</p>
      </form>
      <p><small>Already have an account ??? please <Link to='/login'>Login</Link> </small></p>
    </div>
  );
};

export default Register;
