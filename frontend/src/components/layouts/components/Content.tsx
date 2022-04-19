import { Layout } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../../styles';

const { Content: AContent } = Layout;

const Content = styled(AContent)`
  background-color: ${Colors.onPrimary};
  box-shadow: 0px 5px 30px -6px rgba(100, 100, 100, 0.5);
  border-radius: 10px;
  margin: 25px 20px;
`;

export default Content;
