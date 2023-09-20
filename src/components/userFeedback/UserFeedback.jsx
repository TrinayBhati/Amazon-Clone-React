import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { CartContext } from "../../CartContext";

const UserFeedback = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const onSubmitClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          />
        </Link>

        <div className="login_container">
          <h1>User Feedback </h1>
          <form>
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
              type="email"
              className="text_color"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Comments</h5>
            <input
              type="text"
              className="text_color"
              placeholder="Enter your password"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
          <button
            className="login_signinbutton"
            type="submit"
            onClick={onSubmitClick}
          >
            Continue
          </button>

          <p>We appreciate your feedback, Thank you</p>
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
                <h1>Name : {name}</h1>
                <br />
                <h1>Comments added : {comment}</h1>

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
    </div>
  );
};

export default UserFeedback;
