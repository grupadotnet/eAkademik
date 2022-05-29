import { Table } from '@/components/table';

import { usersDataMock } from '../mocks';

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
  <Table dataSource={usersDataMock} columns={columns} />
);

export default UsersView;
