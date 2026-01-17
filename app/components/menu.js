"use client";

import react, { useState } from "react";

const HambugerMenu = (props) => {
  const [close, setClose] = useState(false);
  return (
    <>
      <button
        className="flex items-center px-3 py-2"
        onClick={(e) => {
          e.stopPropagation();
          props.openMobileMenuView(!close)
          setClose(!close);
        }}
      >
        <a
          href="javascript:void(0)"
          id="menu-icon"
          className={close ? "close" : ""}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </a>
      </button>
    </>
  );
};

export default HambugerMenu;
