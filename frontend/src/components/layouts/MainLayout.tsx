import { Layout } from 'antd';
import MenuItem from '../navigation/menuItem';
import { Header } from './components'

const { Sider,  Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider style={{background: '#222943', width:'260px'}}><MenuItem/></Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout