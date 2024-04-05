import React from "react";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-lg font-bold mb-4">Dragon News</h2>
          <h2>{id}</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
