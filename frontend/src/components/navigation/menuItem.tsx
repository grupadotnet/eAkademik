import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

 background-color:inherit;
 color: #bdbfc7;
 font-family: Arial;
 font-size: 14px;
 width: 100%;
 height: 100vh;
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
       :hover a {
        color: white;
      }
`;
const NavLink = styled(Link)`
color:#bdbfc7;
`;

type Props = {
  title: string,
  url: string,
}
const MenuItem : React.FC<Props> = ({children, title, url}) => (<Container>{children}  <NavLink to={url}> {title} </NavLink> </Container>);


export default MenuItem;
