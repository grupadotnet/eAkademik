import { Button as AButton } from "antd";
import { darken } from "polished";
import styled from "styled-components";

import { Colors } from "../../styles";

const Button = styled(AButton)`
  background-color: ${Colors.primary};
  color: ${Colors.onPrimary};
  border-radius: 8px;
  border: none;

  &:focus{
    background-color: ${Colors.primary};
    color: ${Colors.onPrimary};
  }

  &:hover {
    color: ${Colors.onPrimary};
    background-color: ${darken(0.45, Colors.primary)};
  }

  &:visited{
    background-color: ${Colors.primary};
    color: ${Colors.onPrimary};
  }
`;

export default Button;
