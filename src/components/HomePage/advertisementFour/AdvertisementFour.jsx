import React from "react";
import { useNavigate } from "react-router-dom";
import "./advertisementFour.css";

const AdvertisementFour = ({ content }) => {
  const navigate = useNavigate();
  const cardClick = () => {
    navigate("/display-content");
  };
  // console.log(content);
  // console.log(content.header);
  return (
    <div className="advertisementFour_main" onClick={cardClick}>
      <div className="advertisementFour_header">{content.header}</div>
      <div className="advertisementFour_body">
        <img src={content.image1} className="addFour_image" />
        <img src={content.image2} className="addFour_image" />
        <img src={content.image3} className="addFour_image" />
        <img src={content.image4} className="addFour_image" />
      </div>
      <div className="advertisementFour_footer"> See more</div>
    </div>
  );
};

export default AdvertisementFour;
