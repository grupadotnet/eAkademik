import { Layout as AHeader } from "antd";
import styled from "styled-components";

import { Colors } from "../../styles";

const Header = styled(AHeader)`
    background-color: ${Colors.onPrimary};
    height: 7vh;
    width: 100%;
    margin: auto;
    border: 1px solid 
    box-sizing: border-box;
    padding: 0 2%;
    box-shadow: 0px 5px 30px -6px rgba(100, 100, 100, 0.5);
`

export default Header;
