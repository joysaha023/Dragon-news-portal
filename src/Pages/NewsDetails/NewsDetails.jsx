import React from "react";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";

const NewsDetails = () => {
    const newses = useLoaderData()
  const { id } = useParams();
  const singleNews = newses.find(news => news._id == id)
//   console.log(singleNews)


  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <h2 className="text-lg font-bold mb-4">Dragon News</h2>
          <div className="border rounded-lg p-6">
            <img src={singleNews.image_url} alt="" />
            <h2 className=" md:text-2xl my-6 font-bold">{singleNews.title}</h2>
            <p className="text-base my-5 text-[#706F6F]">{singleNews.details}</p>
            <Link to={"/"}><button className="btn btn-error text-white">All News</button></Link>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
