import { HashRouter as Router, Switch } from 'react-router-dom';
import UtilsRoutes from './features/utils';

const App = () => (
  <Router>
    <Switch>
      <UtilsRoutes />
    </Switch>
  </Router>
);

export default App;
