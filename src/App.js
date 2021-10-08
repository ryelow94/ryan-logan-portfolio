import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router >
      <div className="App">
        <Navbar/>
        <main>
          <Switch>
            <Route  exact path="/react-portfolio/about-me">
              <About />
            </Route>
            <Route  exact path="/react-portfolio/about-me">
              <About />
            </Route>
            <Route  exact path="/react-portfolio/portfolio">
              <Portfolio />
            </Route>
            <Route  exact path="/react-portfolio/contact">
              <ContactForm />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
