import React from "react";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url } = news;

  return (
    <div className="card w-full bg-base-100 shadow-none rounded-none border mb-10">
      <figure>
        <img
        className="w-full md:h-80"
          src={thumbnail_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
