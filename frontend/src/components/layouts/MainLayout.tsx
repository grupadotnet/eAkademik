import { Layout } from 'antd';

import { Icon, MenuItem } from '@/components/navigation';

import { Content, Header } from './components';

const { Sider } = Layout;

const MainLayout: React.FC = ({ children }) => (
  <Layout>
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
