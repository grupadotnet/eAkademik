import { Link } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';
import { Button } from '../../../components/buttons';
import { Header } from '../../../components/layouts/components';
import { Card } from '../../../components/card';
import { Checkbox } from '../../../components/checkbox';

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

    <Item>
      <br />
      Card component
      <Card title="Simple table" extra="Some text"><div>Tutaj jakaś treść</div></Card>
    </Item>
    <Item>
      <Checkbox />
    </Item>
    <hr />
  </div>
);

export default ComponentsView;
