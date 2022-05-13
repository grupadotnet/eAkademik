import { Table } from "../../components/table";

const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      email: "mike.stanowski@gmail.com",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      email: "john.deppy@gmail.com",
    },
    {
      key: "3",
      name: "Wiktor",
      age: "20",
      address: '4 Best Street',
      email: 'wiktortoszef@gmail.com',
    },
  ];

const UsersView = () => (
    <div>
        <Table dataSource={dataSource} columns={columns} />
        <button>dsds</button>
    </div>
);

export default UsersView;
