import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
const App = () => {
  return (
    <Router >
      <div className="App">
        <Navbar
        />
        <main>
          <Switch>
            <Route exact path="/react-portfolio">
              <About />
            </Route>
            <Route exact path="/about-me">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;



