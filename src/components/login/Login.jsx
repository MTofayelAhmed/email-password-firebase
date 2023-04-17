
import React from 'react';

const Login = () => {
  
  return (
    <div className=' w-50 mx-auto'>
      <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
};

export default Login;