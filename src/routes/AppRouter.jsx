import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Characters } from "../pages/Characters";
import { Episodes } from "../pages/Episodes";
import { Home } from "../pages/Home";
import { Locations } from "../pages/Locations";

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/home" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};
