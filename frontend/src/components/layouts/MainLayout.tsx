import { Layout } from 'antd';
import { ProfileFilled } from '@ant-design/icons';
import { MenuItem } from '../navigation';
import { Sider } from './components/Sider';
import { Header } from './components';
import { Breadcrumb } from 'antd';
const { Content } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider><MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>    
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
    <MenuItem title="Invoice" url="Invoice" ><p><ProfileFilled/></p></MenuItem>
  
    </Sider>
    <Layout>
      <Header></Header>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    </Layout>
  </Layout>
);

export default MainLayout