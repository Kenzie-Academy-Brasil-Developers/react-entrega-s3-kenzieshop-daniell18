import { Route, Switch } from "react-router";
import Celulares from "../pages/Celulares";
import HomePage from "../pages/Home";
import Ipad from "../pages/Ipad";
import NoteBooks from "../pages/NoteBooks";
import SmartWatch from "../pages/SmartWatchs";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/celulares">
          <Celulares />
        </Route>
        <Route exact path="/ipads">
          <Ipad />
        </Route>
        <Route exact path="/notebooks">
          <NoteBooks />
        </Route>
        <Route exact path="/smartwatchs">
          <SmartWatch />
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
