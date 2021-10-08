import React from "react";
import { useState } from "react"
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

const App = () => {
  const pages = ['about', 'portfolio', 'contact'];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <Router basename="/react-portfolio">
      <div className="App">
        <Navbar pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <main>
          <Switch>
            <Route exact path="/" component = {About} />
            <Route exact path="/about-me" component={About} />
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
            />
            <Route exact path="/contact" component = {ContactForm} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
