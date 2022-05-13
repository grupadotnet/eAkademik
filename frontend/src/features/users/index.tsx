import { Route } from 'react-router-dom';

import { MainLayout } from '../../components/layouts';

import UsersView from './views/UsersView';

const UsersRoutes: React.VFC = () => (
  <MainLayout>
    <Route path="/Users" component={UsersView} />
  </MainLayout>
);

export default UsersRoutes;
