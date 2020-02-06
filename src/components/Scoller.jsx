import React from "react";

const Scroller = ({ children }) => {
  return <div style={{ overflowY: "scroll", border: '1px solid black', height:'600px' }}>{children}</div>;
};

export default Scroller;