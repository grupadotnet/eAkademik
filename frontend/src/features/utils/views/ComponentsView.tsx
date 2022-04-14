import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/buttons';
import { Header } from '../../../components/layouts/components';
import { Card } from '../../../components/card'

const Item = styled.div`
  margin: 25px 0px;
`;

const ComponentsView = () => (
  <div style={{ padding: 50 }}>
    <Link to="/">Wróć do strony głównej</Link>
    <hr/>
    <Item>
      Button component
      <br></br>
      <Button>Główny przycisk</Button>
    </Item>

    <Item>
      <br></br>
      Header component
      <Header></Header>
    </Item>
    
    <Item>
      <br></br>
      Card component
      <Card title="Simple table" extra="Some text"><div>Tutaj jakaś treść</div></Card>
    </Item>
    <hr/>
  </div>
);

export default ComponentsView