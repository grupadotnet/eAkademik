import { Row } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';
import { Button } from '../../../components/buttons';
import { Header } from '../../../components/layouts/components';
import { Table } from '../../../components/table';

const Item = styled.div`
  margin: 25px 0px;
`;

const ComponentsView = () => (
  <div style={{ padding: 50 }}>
    <Link to="/">Wróć do strony głównej</Link>
    <hr />
    <Item>
      Button component
      <br />
      <Button>Główny przycisk</Button>
    </Item>

    <Item>
      <br />
      Header component
      <Header />
    </Item>
<<<<<<< HEAD
    <Item>
      <Table pagination={{ pageSize: 20 }}></Table>
    </Item>
    <hr/>
=======

    <Item>
      <br />
      Content component
      <Content>1</Content>
    </Item>

    <Item>
      <br />
      Card component
      <Card title="Simple table" extra="Some text">
        <div>Tutaj jakaś treść</div>
      </Card>
    </Item>
    <Item>
      <Checkbox />
    </Item>

    <hr />
>>>>>>> main
  </div>
);

export default ComponentsView;
