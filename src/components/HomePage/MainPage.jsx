import React from "react";
import "./MainPage.css";
import AdvertisementOne from "./advertisementOne/AdvertisementOne";
import AdvertisementFour from "./advertisementFour/AdvertisementFour";
import AdvertisementBelt from "./advertisementBelt/AdvertisementBelt";
import ImageSlider from "../ImageSlider/ImageSlider";

const MainPage = () => {
  const content = [
    {
      header: "Up to 70% off | Styles for women",
      image1:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/women1.jpg?updatedAt=1689754408554",
      image2:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/women2.jpg?updatedAt=1689754408458",
      image3:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/women3.jpg?updatedAt=1689754408308",
      image4:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/women4.jpg?updatedAt=1689754408279",
    },
    {
      header: "Up to 70% off | Styles for men",
      image1:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/men1.jpg?updatedAt=1689757108536",
      image2:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/men2.jpg?updatedAt=1689757107860",
      image3:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/men3.jpg?updatedAt=1689757107920",
      image4:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/men4.jpg?updatedAt=1689757107685",
    },
    {
      header: "Appliances for your home | Up to 55% off",
      image1:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/appl1.jpg?updatedAt=1689758110115",
      image2:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/appl2.jpg?updatedAt=1689758110622",
      image3:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/appl3.jpg?updatedAt=1689758110424",
      image4:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/appl4.jpg?updatedAt=1689758110618",
    },
    {
      header: "Automotive essentials | Up to 60% off",
      image1:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/aut1.jpg?updatedAt=1689759010975",
      image2:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/aut2.jpg?updatedAt=1689759010906",
      image3:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/aut3.jpg?updatedAt=1689759010697",
      image4:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/aut4.jpg?updatedAt=1689759010722",
    },
    {
      header: "Offers on travel tickets",
      image1:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/tic1.jpg?updatedAt=1689759300068",
      image2:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/tic2.jpg?updatedAt=1689759300290",
      image3:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/tic3.jpg?updatedAt=1689759300071",
      image4:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/tic4.jpg?updatedAt=1689759300411",
    },
  ];
  const singleContent = [
    {
      header: "Up to 70% off | Clearance store",
      image:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/Clearance_store_Desktop_.jpg?updatedAt=1689680774643",
    },
    {
      header: "Up to 50% off | Laptops",
      image:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/advertisement2.jpg?updatedAt=1689755879226",
    },
    {
      header: "Up to 55% off | Electronics Clearance Stock",
      image:
        "https://ik.imagekit.io/amazonzlone15/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1689420721429",
    },
  ];

  return (
    <div className="mainpage">
      <ImageSlider />
      {/* <div style={{ paddingTop: "35vh", display: "flex", flexWrap: "wrap" }}> */}
      <div className="mainPageDiv">
        {/* <Link to={"/display-content"}> */}
        <AdvertisementOne singleContent={singleContent[0]} />
        {/* </Link> */}
        <AdvertisementFour content={content[0]} />
        <AdvertisementOne singleContent={singleContent[1]} />
        <AdvertisementFour content={content[1]} />
        <AdvertisementFour content={content[2]} />
        <AdvertisementOne singleContent={singleContent[2]} />
        <AdvertisementFour content={content[3]} />
        <AdvertisementFour content={content[4]} />
        <AdvertisementBelt />
      </div>
    </div>
  );
};

export default MainPage;
