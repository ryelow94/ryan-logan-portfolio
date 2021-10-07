import React, { Component } from "react";
import { portfolioItems } from "./PortfolioItems.js";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <ul>
          {portfolioItems.map((item, index) => {
            return (
              <div key={index} className="portfolio-card">
                <article className="card">
                  <h4 className={item.cName}>{item.title}</h4>
                  <img src={item.img} alt=""></img>
                  <br></br>
                  <p>{item.description}</p>
                  <br></br>
                  <a href={item.github}>Github</a>
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
