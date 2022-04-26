import { Row } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/buttons';
import { Header } from '../../../components/layouts/components';
import { Table } from '../../../components/table';

const Item = styled.div`
  margin: 25px 0px;
`;

const ComponentsView = () => (
  <div style={{ padding: 50 }}>
    <Link to="/">Wróć do strony głównej</Link>
    <hr/>
    <Item>
      <Button>Główny przycisk</Button>
    </Item>
    <Item>
      <Header></Header>
    </Item>
    <Item>
      <Table pagination={{ pageSize: 20 }}></Table>
    </Item>
    <hr/>
  </div>
);

export default ComponentsView