import React from "react";
import "./rightSide.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const cardClick = () => {
    navigate(`/place-order/${product.id}`);
  };
  // console.log(product);
  // console.log("product", product?.rating.rate);
  return (
    <div className="product_main" onClick={cardClick}>
      {/* <div className="product_main"> */}
      <div className="product_image">
        <img
          src={product?.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      {/* <div className="product_name">{product.title.slice(0,35)}</div> */}
      <div className="product_name">{product?.title}</div>
      <div className="product_rate">
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            defaultValue={Math.floor(product?.rating.rate)}
            readOnly
            sx={{ fontSize: "20px" }}
          />
        </Stack>
        <div className="product_rating">{product?.rating.count}</div>
      </div>

      <div className="product_price">
        <CurrencyRupeeIcon sx={{ fontSize: "16px" }} />
        {product?.price}
      </div>
      <div className="product_delivery">
        <span className="product_prime">prime</span>
        Get it by <b>Tommorow</b>
        <div style={{ padding: " 1% 0px" }}>FREE Delivery by Amazon</div>
      </div>
    </div>
  );
};

export default Product;
