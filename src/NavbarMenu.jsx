import React, { useState } from "react";
import Menu from "./Menu"
import './_variables.scss'
import './_navbar.scss'


const NavbarMenu = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <header>
        <div className="main-header">
          <section className="image_content">IPSITA'S</section>
          <ul className="contact_items">
            <li>
              <span className="lable">01.  CALL:</span>
              <span className="value"> +91-89xxxxxx73</span>
            </li>
            <li>
              <span className="lable">02.  WRITE:</span>
              <span className="value"> </span>
            </li>
          </ul>
          <section className="menu_container">
            <i className="fa fa-bars" aria-hidden="true">
            </i>
          </section>
          <Menu />
          {/* {isShown && (
            <Menu />
          )} */}
        </div>
        <div className="submain_header">
          <span className="portfolio">PORTFOLIO</span>
        </div>
      </header>
    </>
  );
};

export default NavbarMenu;
