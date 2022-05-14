import { Table } from "../../components/table";

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
  
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      surname: 'Stanowski',
      email: "mike.stanowski@gmail.com",
    },
    {
      key: "2",
      name: "John",
      surname: 'Deppy',
      email: "john.deppy@gmail.com",
    },
    {
      key: "3",
      name: "Wiktor",
      surname: 'Rudzki',
      email: 'wiktortoszef@gmail.com',
    },
  ];

const UsersView = () => (
    <div style={{padding: "2%"}}>
        <Table dataSource={dataSource} columns={columns} />
    </div>
);

export default UsersView;
