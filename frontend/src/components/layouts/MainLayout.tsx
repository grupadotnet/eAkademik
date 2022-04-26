import { Layout } from 'antd';

import { MenuItem } from '../navigation';
import { Header, Content } from './components'
import { Icon } from  '../navigation'

const { Sider } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}><MenuItem><Icon/>Invoice </MenuItem></Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout;
