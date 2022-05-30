import { Layout } from 'antd';

import { Icon, MenuItem } from '@/components/navigation';

import { Content, Header } from './components';

const { Sider } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={260}>
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
