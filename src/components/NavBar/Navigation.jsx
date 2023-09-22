import React, { useContext, useState, useEffect } from "react";
import "./NavBar.css";
import Search from "./SearchBox/Search";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import MenuIcon from "@mui/icons-material/Menu";
import { auth } from "../../FireBase";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

const Navigation = () => {
  const [phone, setPhone] = useState(false);
  const { item, size, increment, log, user, setUser } = useContext(CartContext);
  const [name, setName] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // const user = auth.currentUser;

  useEffect(() => {
    if (auth?.currentUser?.displayName != undefined) {
      setName(auth?.currentUser?.displayName);
    }
  }, [auth?.currentUser?.displayName]);
  // console.log("user", auth?.currentUser?.displayName);

  const staticData = [
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy6.jpg?updatedAt=1690388454263",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy9.jpg?updatedAt=1690388454232",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy7.jpg?updatedAt=1690388454334",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy11.jpg?updatedAt=1690388454331",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy12.gif?updatedAt=1690388510895",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy18.jpg?updatedAt=1690388572418",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy8.jpg?updatedAt=1690388454266",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b3.jpg?updatedAt=1690729810880",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy15.jpg?updatedAt=1690388695828",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy14.jpg?updatedAt=1690388623134",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b12.jpg?updatedAt=1690730091457",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b13.jpg?updatedAt=1690730091483",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy13.jpg?updatedAt=1690388572074",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy16.jpg?updatedAt=1690388695845",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b4.jpg?updatedAt=1690729810873",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/b1.jpg?updatedAt=1690729810855",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/b6.jpg?updatedAt=1690729810847",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
    },
  ];

  const navigate = useNavigate();
  const cardClick = () => {
    navigate("/checkout");
  };
  const homeCLick = () => {
    navigate("/");
  };
  const signInClick = () => {
    navigate("/login");
  };
  const onFeedbackClick = () => {
    navigate("/user-feedback");
  };
  const onNavFooterClick = (e) => {
    const value = e.target.getAttribute("value");
    // console.log(value);
    navigate("/static-pages", { state: staticData[value] });
  };
  // console.log(log?._tokenResponse?.email);
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        // console.log("User logged out successfully!");
        // Clearing user data from the global state by setting user to null
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return (
    <>
      <div className="navbar_component ">
        <div className="navbar_logo" onClick={homeCLick}></div>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <select className="navbar_location">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Noida</option>
            <option>Goa</option>
            <option>Chennai</option>
            <option>Kanpur</option>
          </select>
        </div>
        <Search />
        <div className="navbar_language">
          <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/Flag_of_India.png?updatedAt=1689664336929" />
          <select className="navbar_language_select">
            <option value="eng">ENG</option>
            <option value="hin">HINDI</option>
            <option value="urdu">URDU</option>
          </select>
        </div>
        <div className="navbar_text navbar_signin">
          {user ? (
            <div onClick={handleClick}>
              <div style={{ fontSize: "14px" }}>Hello, {user.name}</div>
              <div style={{ fontWeight: "bold" }}>Account & Lists</div>
            </div>
          ) : (
            <div onClick={signInClick}>
              <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
              <div style={{ fontWeight: "bold" }}>Account & Lists</div>
            </div>
          )}

          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            style={{ zIndex: "2" }}
            onClick={handleLogout}
          >
            <Box sx={{ p: 1 }} className="navbar_logoutButton">
              Logout
            </Box>
          </Popper>
        </div>

        <div className="navbar_text navbar_returns" onClick={onFeedbackClick}>
          <div style={{ fontSize: "14px" }}>Feedback</div>
          <div style={{ fontWeight: "bold" }}>& Comment</div>{" "}
        </div>
        <div className="navbar_text navbar_cart" onClick={cardClick}>
          <div className="cart_image"></div>
          <div className="cart_item">{size}</div>
          <div className="navbar_text_cart">Cart</div>
        </div>

        <div className="hamburger">
          <MenuIcon
            onClick={() => {
              setPhone(!phone);
            }}
          />
        </div>
      </div>
      <div className="navbar_footer">
        <div className="navbar_footer_elems">
          <div
            className="navbar_footer_text"
            value="0"
            onClick={onNavFooterClick}
          >
            Specials
          </div>
          <div
            className="navbar_footer_text"
            value="1"
            onClick={onNavFooterClick}
          >
            Movers & Shakers
          </div>
          <div
            className="navbar_footer_text"
            value="2"
            onClick={onNavFooterClick}
          >
            Best Sellers
          </div>
          <div
            className="navbar_footer_text"
            value="3"
            onClick={onNavFooterClick}
          >
            Today's Deals
          </div>
          <div
            className="navbar_footer_text"
            value="0"
            onClick={onNavFooterClick}
          >
            Mobiles
          </div>
          <div
            className="navbar_footer_text"
            value="1"
            onClick={onNavFooterClick}
          >
            New Releases
          </div>
          <div
            className="navbar_footer_text"
            value="2"
            onClick={onNavFooterClick}
          >
            Prime
          </div>
          <div
            className="navbar_footer_text"
            value="3"
            onClick={onNavFooterClick}
          >
            Fire TV
          </div>
          <div
            className="navbar_footer_text"
            value="0"
            onClick={onNavFooterClick}
          >
            Electronics
          </div>
          <div
            className="navbar_footer_text"
            value="1"
            onClick={onNavFooterClick}
          >
            Home & Kitchen
          </div>
          <div
            className="navbar_footer_text"
            value="2"
            onClick={onNavFooterClick}
          >
            Echo & Alexa
          </div>
        </div>
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/amazon_prime_navbar_footer.jpg?updatedAt=1689669550083" />
      </div>
      {/* ================================================== */}
      {phone && (
        <div className="mobileMainDiv">
          <div className="navbar_language2">
            <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/Flag_of_India.png?updatedAt=1689664336929" />
            <select className="navbar_language_select2">
              <option value="eng">ENG</option>
              <option value="hin">HINDI</option>
              <option value="urdu">URDU</option>
            </select>
          </div>
          <div className="navbar_text navbar_signin2">
            {user ? (
              <div onClick={handleClick}>
                <div style={{ fontSize: "14px" }}>Hello, {user.name}</div>
                <div style={{ fontWeight: "bold" }}>Account & Lists</div>
              </div>
            ) : (
              <div onClick={signInClick}>
                <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
                <div style={{ fontWeight: "bold" }}>Account & Lists</div>
              </div>
            )}
          </div>
          <div
            className="navbar_text navbar_returns2"
            onClick={onFeedbackClick}
          >
            <div style={{ fontSize: "14px" }}>Feedback</div>
            <div style={{ fontWeight: "bold" }}>& Comment</div>{" "}
          </div>
          <div className="navbar_text navbar_cart2" onClick={cardClick}>
            <div className="cart_image2"></div>
            <div className="cart_item2">{size}</div>
            <div className="navbar_text_cart2">Cart</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
