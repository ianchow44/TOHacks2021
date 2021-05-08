import React from "react";
// import Signup from "./signup";
import Form from "./Form"
import Signup from "./signup";
import GoogleVision from "../apps/GoogleVision/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return(
  <AuthProvider>
    <Router>
      <div className="container">
        <Route path="/" exact component={Signup} />
        <Route path="/faceauth" component={GoogleVision} />
        <Route path = "/form" component={Form}/>
      </div>
    </Router>
  </AuthProvider>
  )
}

export default App;
