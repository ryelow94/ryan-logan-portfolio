import React from "react";
import { footerItems } from "./FooterItems";
import "./Footer.css"

const Footer = () => (
  <div className="footer">
    <div>
      {footerItems.map((item, index) => {
        return (
          <div className="footer-div" key={index}>
            <h3>{item.title}</h3>
            <br></br>
            <a className="footer-link" href={item.github}>Github</a>
            <br></br>
            <a className="footer-link" href={item.linkedIn}>LinkedIn</a>
            <br></br>
            <a className="footer-link" href={item.facebook}>Facebook</a>
            <br></br>
            <a className="footer-link" href="mailto: ryelow94@gmail.com">Email</a>
          </div>
        );
      })}
    </div>
  </div>
);

export default Footer;
