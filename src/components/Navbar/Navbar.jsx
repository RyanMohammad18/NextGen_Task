import React, { useState } from "react";
import style from "./navstyle.module.css";
import {Navbutton} from "../../molecules/Common";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.navmaincontainer}>
      <div className={style.leftcontainer}></div>
      <div>
        <span className={style.menuIcon} onClick={toggleMenu}>
          &#9776;
        </span>
        <div
          className={`${style.rightcontainer} ${menuOpen ? style.show : ""}`}
        >
          <Navbutton text="Section 1" />
          <Navbutton text="Section 2" />
          <Navbutton text="Section 3" />
          <Navbutton text="Two Sub devs" />
          <Navbutton text="Section 4" />
          <Navbutton text="Two Liner 1" />
          <Navbutton text="Two Liner 2" />
          <Navbutton text="Section 5" />
          <Navbutton text="Two Liner 3" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
