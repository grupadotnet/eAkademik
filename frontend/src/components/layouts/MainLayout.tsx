import { Layout } from 'antd';

import { Header } from './components';

const { Sider, Content } = Layout;

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
