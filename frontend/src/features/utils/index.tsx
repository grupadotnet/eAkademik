import { Route } from "react-router-dom";

import ComponentsView from "./views/ComponentsView";
import StartupView from "./views/StartupView";

const UtilsRoutes = () => {
  return (
    <>
      <Route exact path="/" component={StartupView} />
      <Route path="/components" component={ComponentsView} />
    </>
  )
}

export default UtilsRoutes;