import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/buttons';
import { Header } from '../../../components/layouts/components';
import { Table } from '../../../components/table';

const Item = styled.div`
  margin: 25px 0px;
`;

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    email: 'mike.stanowski@gmail.com',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    email: 'john.deppy@gmail.com',
  },
  {
    key: '3',
    name: 'Wiktor',
    age: '20',
    address: '4 Best Street',
    email: 'wiktortoszef@gmail.com',
  },
];

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
      Table component
      <Table pagination={{ pageSize: 20 }} columns={columns} dataSource={dataSource} />
    </Item>
    <hr />
  </div>
);

export default ComponentsView;
