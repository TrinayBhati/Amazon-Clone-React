import React from "react";
import "./staticPage.css";
import { useLocation } from "react-router-dom";

const StaticPage = () => {
  const location = useLocation();

  const img1 = location.state?.img1;
  const img2 = location.state?.img2;
  const img3 = location.state?.img3;
  const img4 = location.state?.img4;

  return (
    <div className="static_page_container">
      <div>
        <div>
          <img src={img1} />
        </div>
      </div>
      <div>
        <div>
          <img src={img2} />
        </div>
      </div>
      <div>
        <div>
          <img src={img3} />
        </div>
      </div>
      <div>
        <div>
          <img src={img4} />
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
