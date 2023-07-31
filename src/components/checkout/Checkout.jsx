import React, { useContext, useEffect, useState } from "react";
import "./checkout.css";
import Grid from "@mui/material/Grid";
import CheckOutItems from "./CheckOutItems";
import { CartContext } from "../../CartContext";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    item,
    size,
    increment,
    price,
    setPrice,
    quantityItem,
    qty,
    qtyId,
    log,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartValue = () => {
    let total = 0;
    for (let i = 0; i < item.length; i++) {
      for (let j = 1; j < qty; j++) {
        if (parseFloat(item[i].id) == qtyId) {
          total += parseFloat(item[i].price);
        }
      }
      total += parseFloat(item[i].price);
    }
    setPrice(total);
    // localStorage.setItem("setPrice", JSON.stringify(total));
    return price;
  };

  // console.log("total", price);
  // console.log("id", qtyId);
  // console.log("qty", qty);
  // console.log("item", item.id);
  // console.log("item", item);

  const onProceedClick = () => {
    if (size !== 0) {
      if (log?._tokenResponse?.email) {
        navigate("/address-info");
      } else {
        setOpen(true);
      }
    } else {
      return;
    }
  };
  return (
    <div className="body">
      <Grid container>
        <Grid item={10}>
          <div className="checkout__container">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {item.length > 0 ? (
                item.map((product) => <CheckOutItems product={product} />)
              ) : (
                <div>
                  <h1 style={{ textAlign: "center", padding: "10px" }}>
                    Your Amazon Cart is empty
                  </h1>
                  <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/empty.svg?updatedAt=1690177984467" />
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div className="proceedToBuyBox">
            <div style={{ fontSize: "26px", textAlign: "initial" }}>
              Subtotal ({size} items):
              <strong style={{ margin: "10px" }}>
                {/* {localStorage.getItem("setPrice")} */}
                {cartValue()}
              </strong>
            </div>
            <div style={{ paddingTop: "25px" }}>
              {/* <Link to="/address-info"> */}
              <button className="placeorder__button" onClick={onProceedClick}>
                Proceed to Buy
              </button>
              {/* </Link> */}
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
        {/* <Button variant="outlined" onClick={handleOpen}>
            Open Dialog
          </Button> */}
        <Dialog open={open} onClose={handleClose}>
          <Box
            component="span"
            sx={{
              p: 2,
            }}
            className="box_container"
          >
            <img
              src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
              height="300px"
            />
            <h1>You need to Login first</h1>
            <br />
            <br />
            <button
              className="login_signinbutton"
              onClick={() => {
                handleClose();
                navigate("/login");
              }}
              autoFocus
              sx={{ fontSize: "30px" }}
            >
              Continue to Login
            </button>
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default Checkout;
