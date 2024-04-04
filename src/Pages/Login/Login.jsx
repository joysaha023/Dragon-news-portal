import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }


  return (
    <div>
      <NavBar></NavBar>
     <div className="my-6 text-center">
     <h1 className="text-2xl font-bold mb-5">Login your account</h1>
      <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 bg-gray-100 mx-auto border rounded-md">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <p className="mt-3">Do not have an account? <Link to={"/register"}><button className="btn btn-link">Register</button></Link></p>
      </form>
     </div>
    </div>
  );
};

export default Login;
