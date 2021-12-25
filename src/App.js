import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import ListJobs from "./components/ListJobs";
import NavBar from "./components/NavBar";
import getCurrentUser from "./utils/getCurrentUser";

const netlifyIdentity = require("netlify-identity-widget");

function App() {
  netlifyIdentity.on("init", (user) => console.log("init", user));
  netlifyIdentity.on("login", (user) => console.log("login", user));
  netlifyIdentity.on("logout", () => console.log("Logged out"));
  netlifyIdentity.on("error", (err) => console.error("Error", err));
  netlifyIdentity.on("open", () => console.log("Widget opened"));
  netlifyIdentity.on("close", () => console.log("Widget closed"));
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ListJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
