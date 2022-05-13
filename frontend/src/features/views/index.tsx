import { Route } from 'react-router-dom';

import { MainLayout } from '../../components/layouts';

import UsersView from './UsersView';

const UsersRoutes: React.VFC = () => (
  <MainLayout>
    <Route path="/users" component={UsersView} />
  </MainLayout>
);

export default UsersRoutes;
