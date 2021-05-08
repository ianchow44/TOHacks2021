import React from "react";
import Signup from "./signup";
import GoogleVision from "./GoogleVision";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return(
  <AuthProvider>
    <Router>
      <div className="container">
        <Route path="/" exact component={Signup} />
        <Route path="/faceauth" component={GoogleVision} />
      </div>
    </Router>
  </AuthProvider>
  )
}

export default App;
