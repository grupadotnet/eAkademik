import { Checkbox as ACheckbox } from "antd";
import styled from "styled-components";

import { Colors } from "../../styles";

const Checkbox = styled(ACheckbox)`
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox-checked::after,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: ${Colors.primary};
    }

    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${Colors.primary};
        border-color: ${Colors.primary};
    }
`;

export default Checkbox;
