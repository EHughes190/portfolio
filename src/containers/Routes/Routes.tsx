import { Switch, Route, useLocation } from "react-router-dom";
import { Home, Projects } from "../index";

export const Routes = (): JSX.Element => {
  const location = useLocation();
  return (
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route path="/Projects">
          <Projects/>
        </Route>
      </Switch>
  );
};
