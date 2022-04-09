import { Button as AButton } from "antd";
import { darken } from "polished";
import styled from "styled-components";

import { Colors } from "../../styles";

const Button = styled(AButton)`
  /* TODO: Change colors */
  background-color: ${Colors.primary};
  color: ${Colors.onPrimary};
  border-radius: 5px;

  &:hover {
    color: ${Colors.onPrimary};
    background-color: ${darken(0.2, Colors.primary)};
  }
`;

export default Button;
