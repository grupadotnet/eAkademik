import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/buttons';

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
  </div>
);

export default ComponentsView