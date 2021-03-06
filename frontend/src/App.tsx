import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { MainLayout } from '@/components/layouts';
import { UsersViews } from '@/features/users';
import { ComponentsView, StartupView } from '@/features/utils';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={StartupView} />
        <Route path="/components" component={ComponentsView} />
        <Route path="/users" component={UsersViews} />

        {/* If doesn't find any route displays startup view */}
        <Route path="*" component={StartupView} />
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
