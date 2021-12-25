import react from "react";
import reactDom from "react-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "inline",
        listStyleType: "none",
        background: "white",
        width: "100vw",
        position: "sticky",
      }}
      data-netlify-identity-menu
    ></div>
  );
};

export default NavBar;
