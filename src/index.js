import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, browserHistory, Switch } from "react-router-dom";
import store from "./store";
import App from "./components/App";
import Event from "./components/Event";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/e/:eventID" component={Event} />
      </Switch>
    </Router>
  </Provider>,
  root
);

export default App;
