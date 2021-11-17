import React, { Component } from "react";
import { portfolioItems } from "./PortfolioItems.js";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ul>
          {portfolioItems.map((item, index) => {
            return (
              <div key={index} className="portfolio-card">
                <article className="card">
                  <h4 className={item.cName}>{item.title}</h4>
                  <img className="card img" src={item.img} alt="portfolio-img"></img>
                  <br></br>
                  <p>{item.description}</p>
                  <br></br>
                  <a href={item.github}>Github Repository</a>
                  <br></br>
                  <a href={item.deployed}>Deployed Page</a>
                </article>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Portfolio;
