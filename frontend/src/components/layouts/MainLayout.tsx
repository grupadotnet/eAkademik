import { Layout } from 'antd';

import { Header } from '.'

const { Sider,  Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>Sider</Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout