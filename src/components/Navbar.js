import React, { Component} from "react";
// import { Router } from "react-router";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
      this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Ryan Logan</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((_item_, _index_) => {
            return (
              <Link to={_item_.link} className={_item_.cName}>
                  {_item_.title}
                </Link>
              // <li key={index}>_
              //   <a className={item.cName} href={item.link}>_
              //     {item.title}_
              //   </a>_
              // </li>_
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
