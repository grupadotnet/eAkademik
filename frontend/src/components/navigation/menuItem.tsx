import { Menu } from 'antd';
import styled from 'styled-components';

const Container = styled.div`

 background-color:inherit;
 color: #bdbfc7;
 font-family: Arial;
 font-size: 14px;
 width: 100%;
 height: 100%;
 width: 260px;
 padding-top: 17px;
 padding-bottom:17px;
 border-right-width: 0px;
 display: flex;
 align-items: center;
 p{
  padding-left: 20px;
  margin-bottom:0px;
 }
 span{
    margin-right: 20px; 
   }
     &:hover {
       background-color: #1a1e31;
       color: white;
`;
const MenuItem = (props:any) => (<Container>{props.children}</Container>);

export default MenuItem;
