import { Layout } from 'antd';
import { ProfileFilled } from '@ant-design/icons';
import { MenuItem } from '../navigation';
import { Sider } from './components/Sider';
import { Header } from './components';

const { Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider><MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    <MenuItem><p><ProfileFilled/>Invoice</p></MenuItem>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout