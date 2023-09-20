import React, { useState, useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CartContext } from "../../CartContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { setLog } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(name, "displayName");
      await updateProfile(auth.currentUser, { displayName: name });

      setOpen(true);
      navigate("/");

      // console.log(displayName);
    } catch (error) {
      console.log("Error signing up: ", error);
    }

    // signUpWithEmailAndPassword(email, password, name)
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
        />
      </Link>

      <div className="login_container">
        <h1>Create Account</h1>
        <form
          onSubmit={(e) => {
            register(e);
          }}
        >
          <h5>Your name</h5>
          <input
            type="text"
            className="text_color"
            placeholder="First and last name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            className="text_color"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            className="text_color"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
            <i>Passwords must be at least 6 characters.</i>
          </p>
          <button className="login_signinbutton" type="submit">
            Continue
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <p>
          By creating an account or logging in, you agree to Amazon’s Conditions
          of Use and Privacy Policy.
        </p>
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
              <img src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif" />
              <h1>Account Created successfully</h1>
              <br />
              <br />
              <button
                className="login_signinbutton"
                onClick={() => {
                  handleClose();
                  navigate("/");
                }}
                autoFocus
                sx={{ fontSize: "30px" }}
              >
                Continue to Amazon
              </button>
            </Box>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
