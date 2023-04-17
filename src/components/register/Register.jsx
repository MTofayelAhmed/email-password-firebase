import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleOnBlur = (event) => {
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const email = event.target.email.value;
    console.log(password, email);
  };
  return (
    <div>
      <h2>Please register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          placeholder="your Email"
        />
        <br />
        <input
          onBlur={handleOnBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
};

export default Register;
