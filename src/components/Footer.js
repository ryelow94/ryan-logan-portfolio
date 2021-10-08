import React from "react";
import { footerItems } from "./FooterItems";
import "./Footer.css"

const Footer = () => (
  <div className="footer">
    <div>
      {footerItems.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <br></br>
            <a href={item.github}>Github</a>
            <br></br>
            <a href={item.linkedIn}>LinkedIn</a>
          </div>
        );
      })}
    </div>
  </div>
);

export default Footer;