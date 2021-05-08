import React from "react";
import Signup from "./signup";
import GoogleVision from "../apps/GoogleVision/app";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={GoogleVision} />
        <Route path="/faceauth" component={GoogleVision} />
      </div>
    </Router>
  );
}

export default App;
