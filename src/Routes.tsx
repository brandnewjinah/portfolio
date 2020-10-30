import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import ResMenu from "./components/header/ResMenu";

//import pages
import Home from "./pages/Home";
import UXProjects from "./pages/UXProjects";

//import projects
import UIcomp from "./pages/projects/uicomp";
import Rimowa from "./pages/projects/rimowa";
import AirbnbM from "./pages/projects/airbnbapp";
import AirbnbW from "./pages/projects/airbnb";
import Eztext from "./pages/projects/eztext";
import Gladeo from "./pages/projects/gladeo";
import Beauty from "./pages/projects/beautybd";
import Revolve from "./pages/projects/revolve";
import Mahalo from "./pages/projects/mahalo";

const Routes = () => {
  return (
    <Router>
      {/* <ResMenu /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/uxprojects" component={UXProjects} />
        <Route exact path="/uicomp" component={UIcomp} />
        <Route exact path="/rimowa" component={Rimowa} />
        <Route exact path="/abbapp" component={AirbnbM} />
        <Route exact path="/abb" component={AirbnbW} />
        <Route exact path="/eztext" component={Eztext} />
        <Route exact path="/gladeo" component={Gladeo} />
        <Route exact path="/beautybd" component={Beauty} />
        <Route exact path="/revolve" component={Revolve} />
        <Route exact path="/mahalo" component={Mahalo} />
      </Switch>
    </Router>
  );
};

export default Routes;
