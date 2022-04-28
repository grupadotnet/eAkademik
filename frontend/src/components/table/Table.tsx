import { Table as ATable } from "antd";
import styled from "styled-components";

import { Colors } from '../../styles';

const Table = styled(ATable)`
    box-shadow: 0px 5px 30px -6px rgba(100, 100, 100, 0.5);
    overflow-x: auto;
    background: ${Colors.onPrimary};

    .ant-table-thead > tr > th {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        background: ${Colors.onPrimary};
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }

    .ant-table-tbody > tr > td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
}
`;

export default Table;
