import React from "react";
import "./style.css";

const StyleWithGlobalCSS = () => {
  return (
    <div className="box">
      <div className="header">
        <h3 >This Style is from global css file</h3>
        <p className="paragraph">I am learning react</p>
      </div>
      <div className="header">
        <h3 >This Style is from global css file</h3>
        <p className="paragraph">I am learning react</p>
      </div>
      <div className="header">
        <h3>This Style is from global css file</h3>
        <p className="paragraph">I am learning react</p>
      </div>
    </div>
  );
};

export default StyleWithGlobalCSS;
