import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import FooterComponent from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Detail from './Screen/Detail';
import Home from './Screen/Home';


const App = () => {
  return (

    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Detail/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
      <FooterComponent />
    </Router>

  );
}

export default App;
