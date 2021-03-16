import React from "react";
import Layout from "./Hoc/Layout";

import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

function Routes(props) {
  return (
    <Layout className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default Routes;
