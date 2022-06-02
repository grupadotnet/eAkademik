import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styles';

const Container = styled.div`
  background-color:inherit;
  color: ${Colors.textmenuItem};
  font-size: 14px;
  padding: 20px 20px 20px;
  display: flex;
  align-items: center;
    span {
         margin-right: 20px; 
      }
    &:hover {
    background-color: ${Colors.onhovermenuItem};
    color: ${Colors.onPrimary};
      }   
`;

const NavLink = styled(Link)`
  color:  ${Colors.textmenuItem};
  :hover  {
    color:  ${Colors.onPrimary};
      }
`;

type Props = {
  title: string,
  url: string,
  icon: React.ReactElement,
};

const MenuItem : React.FC<Props> = ({children, title, url, icon}) => (<Container>{children} {icon} <NavLink to={url}> {title} </NavLink> </Container>);

export default MenuItem;
