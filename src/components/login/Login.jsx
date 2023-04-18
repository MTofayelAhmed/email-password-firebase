import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import app from "../../firebase.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {

  const emailRef = useRef()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.loggedUser;
        console.log( loggedUser)
        setSuccess("user login successful");
        setError('');
      })
      .catch((error) => {
        // const error = error.message;
        setError(error.message);
      });

    console.log(email, password);
  };


  const handleResetPassword = event =>{
const email = emailRef.current.value;
if(!email){
  alert("please enter an email")
  return
}
sendPasswordResetEmail(auth, email)
.then(() =>{
alert('please check your email')
})
.catch(error=>{
  console.log(error)
})
console.log(email);
  }


  return (
    <div className=" w-50 mx-auto">
      <h2>Please Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p><small>forget password ?? please <button onClick={handleResetPassword} className="btn btn-link ">Reset password</button> </small></p>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
      <p><small>new to this website ?? please <Link to='/register'>Register</Link></small></p>
    </div>
  );
};

export default Login;
