import React from "react";
import RightSidePanel from "../rightSide/RightSidePanel";
import LeftSidePanel from "../leftSide/LeftSIdePanel";

const DisplayContent = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* <div style={{ margin: "-10px" }}> */}
      <div>
        <LeftSidePanel />
      </div>
      <div>
        <RightSidePanel />
      </div>
    </div>
  );
};

export default DisplayContent;
