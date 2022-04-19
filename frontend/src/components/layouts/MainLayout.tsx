import { Layout } from 'antd';

import { Header, Content } from './components';

const { Sider } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>Sider</Sider>
    <Layout>
      <Header />
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout;
