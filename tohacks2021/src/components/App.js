import React from "react";
// import Signup from "./signup";
import GoogleVision from "./GoogleVision";
import form from "./Form"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={form} />
        <Route path="/faceauth" component={GoogleVision} />
        {/* <Route path="/form" component={form} /> */}
      </div>
    </Router>
  );
}

export default App;
