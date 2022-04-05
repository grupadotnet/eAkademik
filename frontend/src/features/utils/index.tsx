import { Route } from "react-router-dom";

import { MainLayout } from "../../components/layouts";

import ComponentsView from "./views/ComponentsView";
import StartupView from "./views/StartupView";

const UtilsRoutes: React.VFC = () => (
  <MainLayout>
    <Route exact path="/" component={StartupView} />
    <Route path="/components" component={ComponentsView} />
  </MainLayout>
);

export default UtilsRoutes;