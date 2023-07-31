import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#F6F6F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#b12704", marginTop: "20vh" }}>
        Page Not Found!!
      </h1>
      <img src="https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/error.png?updatedAt=1689965793537" />
    </div>
  );
};

export default ErrorPage;
