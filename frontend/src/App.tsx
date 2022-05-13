import { HashRouter as Router, Switch } from 'react-router-dom';
import UtilsRoutes from './features/utils';
import UsersRoutes from './features/views';

const App = () => (
  <Router>
    <Switch>
      <UtilsRoutes />
      <UsersRoutes />
    </Switch>
  </Router>
);

export default App;
