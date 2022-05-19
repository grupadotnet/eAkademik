import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/buttons';
import { Header, Content } from '../../../components/layouts/components';
import { Card } from '../../../components/card';
import { Checkbox } from '../../../components/checkbox';
import { Breadcrumb } from '../../../components/breadcrumb';

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
      <Button>Drugi przycisk</Button>
    </Item>

    <Item>
      <br />
      Header component
      <Header />
    </Item>

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

    <Item>
      Breadcrumb component
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Applications</Breadcrumb.Item>
        <Breadcrumb.Item>Terminal</Breadcrumb.Item>
      
      </Breadcrumb>
    </Item>

    <hr />
  </div>
);

export default ComponentsView;
