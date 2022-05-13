import { Layout } from 'antd';
import {MenuItem} from '../navigation';
import { Header } from './components'
import {ProfileFilled} from '@ant-design/icons';

const { Sider,  Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}><MenuItem><ul><ProfileFilled/></ul>Invoice</MenuItem></Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout