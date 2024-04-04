import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Login With</h2>
      <div className="space-y-5 mb-5">
        <button className="btn btn-outline w-full hover:bg-white hover:text-blue-400 hover:border-blue-400">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full  hover:bg-white hover:text-blue-400 hover:border-blue-400">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <h2 className="text-lg font-bold mb-4">Find Us On</h2>
      <div>
        <a href="" className="p-4 flex items-center gap-3 border text-sm rounded-t-lg"><FaFacebook /> Facebook</a>
        <a href="" className="p-4 flex items-center gap-3 border text-sm rounded-x-lg"><FaTwitter /> Twitter</a>
        <a href="" className="p-4 flex items-center gap-3 border text-sm rounded-b-lg"><FaInstagram /> Instagram</a>
      </div>
    </div>
  );
};

export default RightSideNav;
