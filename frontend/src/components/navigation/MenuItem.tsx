import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styles';
const Container = styled.div`

  background-color:inherit;
  color: ${Colors.grey};
  font-size: 14px;
  width: 260px;
  padding-top: 20px;
  padding-bottom: 20px;
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
    background-color: ${Colors.darkBackground};
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
