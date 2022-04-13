import { Card as ACard } from 'antd'

import styled from "styled-components";

import { Colors } from "../../styles";

const Card = styled(ACard)`
    background-color: ${Colors.onPrimary};
    box-shadow: 0px 5px 10px -5px rgba(100, 100, 100, 0.5);
`

export default Card;
