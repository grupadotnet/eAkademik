import { Layout } from "antd";
import styled from "styled-components";

import { Colors } from "../../../styles";

const { Header: AHeader } = Layout;

const Header = styled(AHeader)`
    background-color: ${Colors.onPrimary};
    box-shadow: 0px 5px 30px -6px rgba(100, 100, 100, 0.5);
`

export default Header;
