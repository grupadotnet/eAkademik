import styled from "styled-components";
import type { MenuProps } from 'antd';
import { Menu as AMenu } from 'antd';

const Sider =styled(AMenu)`

margin: 0;
width: 260px;
background-color: #232a44;
top: 0px;
bottom: 0;
border-right-width: 0px;
position: absolute;
display: flex;
flex-direction: column;
&::-webkit-scrollbar {
    border-radius: 10px;
  width: 10px;
  border: 2px solid black;
  background: #8c8c8e;
  height: 600px;
}
overflow-x: hidden;
&:hover{
  overflow-y: scroll;
  
}
`;
  
  export default Sider