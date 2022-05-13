import React from 'react';
import styled from 'styled-components';
import { Table as ATable, TableProps } from 'antd';

import { Colors } from '@/styles/colors';
import { List } from '@/constants';

const StyledTable = styled(ATable)`
    box-shadow: 0px 5px 30px -6px ${Colors.shadow};
    overflow-x: auto;
    background: ${Colors.onPrimary};

    .ant-table-thead > tr > th {
        font-weight: 400;
        color: ${Colors.header};
        background: ${Colors.onPrimary};
        border-bottom: 1px solid ${Colors.divider};
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }

    .ant-table-tbody > tr > td {
        border-bottom: 1px solid ${Colors.divider};
    }
`;

const Table: React.VFC<TableProps<object>> = ({ ...passThroughProps }) => (
  <StyledTable {...passThroughProps} pagination={{ pageSize: List.size }} />
);

export default Table;
