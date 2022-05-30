import { Form as AForm, Button, Input, Typography } from 'antd';

const Form = () => {
    const [form] = AForm.useForm();
    const { Title, Text } = Typography;
    return (
        <Title>Adding New User</Title>
    )
}

export default Form;
