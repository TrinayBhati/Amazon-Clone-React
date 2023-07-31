import React, { useEffect, useState, useContext } from "react";
import "./leftSide.css";
import { CartContext } from "../../CartContext";
import Stack from "@mui/material/Stack";

import Rating from "@mui/material/Rating";

const LeftSidePanel = () => {
  const { filterProducts, searchProducts } = useContext(CartContext);
  const [element, setElement] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
        );
        if (!res.ok) {
          throw new Error(`API failed status: ${res.status}`);
        }
        const data = await res.json();
        setElement(data);
      } catch (e) {
        setError(e.message);
        console.log(error);
      }
      // console.log(data);
    })();
  }, []);

  const getUniqueData = (element, field) => {
    let val = element?.map((elem) => {
      return elem[field];
    });
    let newVal = [...new Set(val)];
    return newVal;
  };

  const categoryData = getUniqueData(element, "category");
  // console.log("cat", categoryData);

  const ratingData = getUniqueData(element, `rating`);
  const rateData = getUniqueData(ratingData, "rate");

  const uniqueNumbers = Array.from(new Set(rateData.map((r) => Math.floor(r))));
  const uniqueNumber = [...uniqueNumbers, 5];
  uniqueNumber.sort().reverse();

  const boxClick = (e) => {
    filterProducts(element, e.target.innerText, "category");
  };

  const starClick = (elem) => {
    filterProducts(element, elem, "rating", "rate");
    // console.log("clicked", elem);
  };
  const allClick = () => {
    searchProducts(element, "");
  };

  return (
    <div className="leftSide_main">
      <div className="leftSide_header">Category</div>
      <div className="leftSide_brandName">
        <div onClick={boxClick}>
          <label className="brandName" onClick={allClick}>
            <input type="radio" name="options" value="All" />
            All
          </label>
        </div>
        {categoryData.map((elem) => {
          return (
            <div onClick={boxClick}>
              <label className="brandName">
                <input type="radio" name="options" value={elem} />
                {elem}
              </label>
            </div>
          );
        })}
        <div className="leftSide_header">Avg. Customer Review</div>
        <div>
          {uniqueNumber.map((elem) => {
            return (
              <Stack
                spacing={1}
                onClick={() => {
                  starClick(elem);
                }}
                className="brandName"
              >
                <Rating
                  name="half-rating"
                  defaultValue={elem}
                  readOnly
                  key={elem}
                  className="starRatingMobile"
                  sx={{ fontSize: "20px" }}
                />
              </Stack>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
