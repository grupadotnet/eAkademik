import { Button as AButton } from 'antd';
import { darken } from 'polished';
import styled from 'styled-components';

import { Colors } from '../../styles';

const Button = styled(AButton)`
  background-color: ${Colors.primary};
  color: ${Colors.onPrimary};
  border-radius: 4px;
  border: none;
  transition: 0.12s ease-in-out;

  &:focus, &:visited, &:hover{
    background-color: ${Colors.primary};
    color: ${Colors.onPrimary};
  }

  &:hover {
    background-color: ${darken(0.07, Colors.primary)};
  }
`;

export default Button;
