import React, { useContext } from "react";
import "./checkout.css";
import { CartContext } from "../../CartContext";

const CheckOutItems = ({ product }) => {
  // console.log(product);
  const { decrement, quantityItem, qty, qtyId } = useContext(CartContext);

  const onDeleteItem = (value) => {
    decrement(value);
  };
  const onSelectClick = (e) => {
    const number = e.target.value;
    quantityItem(product.id, number);
  };
  console.log(product);
  // const uniqueProduct = new Set(product);
  return (
    <div>
      <div
        style={{
          border: "1px solid #E7E7E7",
          width: "95%",
          height: "250px",
          margin: "25px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "25px",
            height: "200px",
            width: "250px",
          }}
        >
          <img
            src={product.image}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }} className="textgap">
            {product.title}
          </div>
          <div style={{ fontWeight: "bold" }} className="textgap">
            ₹ {product.price}
          </div>
          <div className="textgap" style={{ color: "green" }}>
            In Stock
          </div>
          <div className="textgap delivery_item">
            <img
              src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
              height="30px"
            />
            <p style={{ fontSize: "12px", color: "gray" }}>Amazon Delivered</p>
          </div>
          <div style={{ fontSize: "12px" }} className="textgap delivery_item">
            Eligible for <b>FREE</b> Shipping
          </div>

          <div className="textgap dropdown_items" style={{ marginTop: "10px" }}>
            <select
              placeholder="Qty."
              className="checkout_dropdown"
              onClick={onSelectClick}
            >
              <option>Qty : 1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <span style={{ marginLeft: "15px" }}>|</span>
            <button
              className="checkout_buttons"
              onClick={() => {
                onDeleteItem(product);
              }}
            >
              Delete
            </button>
            <span style={{ marginLeft: "10px" }}>|</span>
            <button className="checkout_buttons">See more like this</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItems;
