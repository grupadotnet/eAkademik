import { Layout } from 'antd';
import { ProfileFilled } from '@ant-design/icons';
import { MenuItem } from '../navigation';
import { Header, Content, Sider} from './components';
import { Breadcrumb } from 'antd';

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>    
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
      <MenuItem title="Invoice" url="Invoice" icon ={<ProfileFilled/>}><p></p></MenuItem>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
      <Content style={{ padding: '0 50px' }}>
    </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
