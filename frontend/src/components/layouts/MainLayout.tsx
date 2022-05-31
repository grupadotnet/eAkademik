import { Layout } from 'antd';
import { Avatar } from '../avatar';
import { MenuItem, Icon } from '../navigation';
import { Header, Content } from './components';

const { Sider } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>
      <Avatar src='http://egret-react.ui-lib.com/assets/images/face-7.jpg' name='Watson Jojce'/>
      <MenuItem>
        <Icon />
        Invoice
      </MenuItem>
    </Sider>
    <Layout>
      <Header />
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default MainLayout;
