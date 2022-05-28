import { Table } from '../../components/table';
import { usersDataMock } from './mocks';

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const UsersView = () => (
  <div>
    <Table dataSource={usersDataMock} columns={columns} />
  </div>
);

export default UsersView;
