import { Menu as AMenu } from 'antd';
import styled from 'styled-components';

const MenuItem = styled(AMenu)`
list-style: none;
background-color: transparent;
color: grey;
display: flex;
align-items: center;
border-right-width: 0px;
padding-left: 20px;
padding-right: 20px;
font-family: Arial;
font-size: 14px;
margin: 0px,0px,0px,0px;
width: 100%;
height: 100%;
width:260px;

height: 48px;
position: relative;

ul{
  padding-right:20px;
  font-size: 18px;
}
    &:hover {
      background-color: #1b2136;
      color: white;
    }
`;

export default MenuItem;
