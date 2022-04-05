import { Layout } from 'antd';

const { Sider, Header, Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>Sider</Sider>
    <Layout>
      <Header>Nagłówek strony</Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout