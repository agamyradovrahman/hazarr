import React from "react";
import { FaChevronUp } from "react-icons/fa";

const Nav = () => {
  return (
    <div style={{ position: "fixed", bottom: "60px", right: "20px" }}>
      <div style={{ border: "none"  }}>
        <a href="#navbar">
        <FaChevronUp fontSize={20} color="#4e7eb1" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
