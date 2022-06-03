import { Layout } from 'antd';
import { UserOutlined, SettingFilled } from '@ant-design/icons';
import { MenuItem } from '../navigation';
import { Content, Header, Sider} from './components';
import { Breadcrumb } from 'antd';


const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>
      <MenuItem title="Użytkownicy" url="/users" icon={<UserOutlined />}></MenuItem>    
      <MenuItem  title="Kompononety" url="/utils" icon={<SettingFilled />}></MenuItem>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
