import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "../redux";
import Transactions from "./Transactions";
import { Provider } from "react-redux";

interface IIndexProps {}

const Index: React.FC<IIndexProps> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Transactions} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Index;
