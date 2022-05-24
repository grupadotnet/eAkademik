import { Table } from "../../components/table";
import { dataSource } from './mocks/index'

const columns = [
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const UsersView = () => (
    <div>
        <Table dataSource={dataSource} columns={columns} />
    </div>
);

export default UsersView;
