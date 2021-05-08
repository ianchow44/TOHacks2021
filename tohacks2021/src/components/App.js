import React from "react";
import Signup from "./signup";
import GoogleVision from "./GoogleVision";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Signup} />
        <Route path="/faceauth" component={GoogleVision} />
      </div>
    </Router>
  );
}

export default App;
