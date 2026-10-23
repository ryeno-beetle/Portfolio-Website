import * as React from "react";
import './Navbar.css'
const Hamburger = (props) => (
  <svg
    id="hamburger-svg"
    data-name="Hamburger SVG"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42.83 40.59"
    width="100%"
    height="35"
    fill="#fff"
    {...props}
  >
    {/* <defs>
      <style>{"\n      .cls-1 {\n        fill: #fff;\n }\n    "}</style>
    </defs> */}
    <rect className="cls-1" width={42.83} height={5} />
    <rect className="cls-1" y={15.31} width={42.83} height={5} />
    <rect className="cls-1" y={30.63} width={42.83} height={5} />
  </svg>
);
export default Hamburger;