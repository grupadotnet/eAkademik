import { Button as AButton } from "antd";
import styled from "styled-components";

import { Colors } from "../../styles";

const Button = styled(AButton)`
  /* TODO: Change colors */
  background-color: ${Colors.primary};
  color: ${Colors.onPrimary};
`;

export default Button;
