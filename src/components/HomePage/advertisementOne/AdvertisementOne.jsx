import React from "react";
import "./advertisement.css";
import { useNavigate } from "react-router-dom";

const AdvertisementOne = ({ singleContent }) => {
  const navigate = useNavigate();
  const cardClick = () => {
    navigate("/display-content");
  };
  return (
    <div className="advertisementOne_main" onClick={cardClick}>
      <div className="advertisementOne_header">{singleContent.header}</div>
      <div className="advertisementOne_body">
        <img src={singleContent.image} width={"100%"} />
      </div>
      <div className="advertisementOne_footer"> See more</div>
    </div>
  );
};

export default AdvertisementOne;
