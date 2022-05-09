import { Menu as AMenuItem } from 'antd';
import styled from 'styled-components';
import { ProfileFilled } from '@ant-design/icons';

const Icon = styled(ProfileFilled)`
 font-size: 18px;
 width: 1em;
    height: 1em;
    overflow: hidden;
    font-size: 1.5rem;
    vertical-align: middle;
    font-family: 'Material Icons';
    margin-right: 10%;
    margin-left: 10%;
    line-height: 1;
    letter-spacing: normal;
 `;
const MenuItem = styled(AMenuItem)`

padding: 0 20px;
height: 48px;
font-size: 14px;
background-color: #001529;
color: grey;
border: 0;
cursor: pointer;
margin: 0;
display: inline-flex;
outline: none;
padding: 0;
position: relative;
align-items: center;
font-weight: normal;
border-radius: 0;
width: 100%;
&:hover {
  background-color: #1b2136;
  color: white;
}
`;

export default MenuItem;
export { Icon };
