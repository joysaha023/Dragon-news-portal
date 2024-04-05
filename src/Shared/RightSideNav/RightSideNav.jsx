import React, { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Qzone from ".././../assets/qZone1.png";
import Qzone2 from ".././../assets/qZone2.png";
import Qzone3 from ".././../assets/qZone3.png";
import bgAd from "../../assets/bg.png";
import { AuthContext } from "../../Providers/AuthProviders";

const RightSideNav = () => {
  const { user, googleSignIn, githubSignIn } = useContext(AuthContext);

  const hadleGoogle = () => {
    if (user) {
      alert("Already signIn");
      return;
    }
    googleSignIn().then().catch();
  };

  const handleGithub = () => {
    if (user) {
      alert("Already signIn");
      return;
    }
    githubSignIn()
    .then()
    .catch()
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Login With</h2>
      <div className="space-y-5 mb-5">
        <button
          onClick={hadleGoogle}
          className="btn btn-outline w-full hover:bg-white hover:text-blue-400 hover:border-blue-400"
        >
          <FaGoogle />
          Login With Google
        </button>

        <button onClick={handleGithub} className="btn btn-outline w-full  hover:bg-white hover:text-blue-400 hover:border-blue-400">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <h2 className="text-lg font-bold mb-4">Find Us On</h2>
      <div>
        <a
          href=""
          className="p-4 flex items-center gap-3 border  hover:text-blue-400 text-sm rounded-t-lg"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href=""
          className="p-4 flex items-center gap-3  hover:text-blue-400 border text-sm rounded-x-lg"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href=""
          className="p-4 flex items-center gap-3 border hover:text-blue-400 text-sm rounded-b-lg"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
      <div className="bg-gray-200 p-2 rounded-md my-5">
        <h2 className="text-lg font-bold p-3">Q-Zone</h2>
        <div className="space-y-4 mb-2">
          <img src={Qzone} alt="" />
          <img src={Qzone2} alt="" />
          <img src={Qzone3} alt="" />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgAd})` }}
        className="text-center space-y-4 p-10 text-white"
      >
        <h2 className="text-[30px] font-bold">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-error text-white">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
