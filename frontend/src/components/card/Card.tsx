import { Card as ACard } from 'antd';

import styled from 'styled-components';

import { Colors } from '../../styles';

const Card = styled(ACard)`
    background-color: ${Colors.onPrimary};
    border-radius: 10px;
    box-shadow: 0px 3px 10px -4px rgba(100, 100, 100, 0.5);

    .ant-card-head
    {
        border-bottom: none;
    }
`;

export default Card;
