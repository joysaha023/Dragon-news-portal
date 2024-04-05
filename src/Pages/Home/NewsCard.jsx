import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, details, author, image_url, _id } = news;

  return (
    <div className="card w-full bg-base-100 shadow-none rounded-none border mb-10">
      <figure>
        <img
        className=""
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          
        </h2>
        {
            details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link></p> : <p>{details}</p>
        }
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
