import { Button as AButton } from "antd";
import { darken, lighten } from "polished";
import styled from "styled-components";

import { Colors } from "../../styles";

const Button = styled(AButton)`
  background-color: ${Colors.primary};
  color: ${Colors.onPrimary};
  border-radius: 4px;
  border: none;

  &:focus{
    background-color: ${Colors.primary};
    color: ${Colors.onPrimary};
  }

  &:hover {
    color: ${Colors.onPrimary};
    background-color: ${darken(0.07, Colors.hoverPrimary)};
  }

  &:visited{
    background-color: ${Colors.primary};
    color: ${Colors.onPrimary};
  }
`;

export default Button;
