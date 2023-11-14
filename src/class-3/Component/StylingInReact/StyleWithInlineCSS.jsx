import React from "react";

const box={
    display: "flex"
    
}

const header={
    backgroundColor: "aqua",
    color: 'red',
    padding: '20px',
    margin: '20px 10px',
    borderRadius: '20px',
    borderBottom:' 10px solid red'
}
const paragraph={
    color: 'black',
    fontSize: '30px'
}
const StyleWithInlineCSS = () => {
  return (
    <div style={box}>
      <div style={header}>
        <h3>This Style is from global css file</h3>
        <p style={paragraph}>I am learning react</p>
      </div>
      <div style={header}>
        <h3>This Style is from global css file</h3>
        <p style={paragraph}>I am learning react</p>
      </div>
      <div style={header}>
        <h3>This Style is from global css file</h3>
        <p style={paragraph}>I am learning react</p>
      </div>
    </div>
  );
};

export default StyleWithInlineCSS;
