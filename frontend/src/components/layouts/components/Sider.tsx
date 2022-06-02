import styled from "styled-components";
import type { MenuProps } from 'antd';
import {Layout} from 'antd';
import {Colors} from '../../../styles';

const { Sider: ASider } = Layout;

const Sider =styled(ASider)`
  background-color: ${Colors.siderBackground};
  border-right-width: 0px;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    border: 2px ${Colors.blackScrollbar};
    background: ${Colors.scrollbarBackground};
  }
  &:hover{
    overflow-y: auto;
  }
`;
  
  export default Sider;
