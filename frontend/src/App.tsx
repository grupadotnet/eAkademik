import { HashRouter as Router } from 'react-router-dom';
import UsersRoutes from './features/users';
import UtilsRoutes from './features/utils';

const App = () => (
  <Router>
    <UsersRoutes />
    <UtilsRoutes />
  </Router>
);

export default App;
