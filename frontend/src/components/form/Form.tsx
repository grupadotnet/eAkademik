import { Form as AForm, Button, Input, Typography, FormProps } from 'antd';

import styled from 'styled-components';

import { Colors } from '@/styles/colors';

const StyledForm = styled(AForm)`
    box-shadow: 0px 5px 30px -6px ${Colors.shadow};
    background: ${Colors.onPrimary};
`

const Form: React.VFC<FormProps<object>> = ({ ...passThroughProps }) => {
    const [form] = StyledForm.useForm();
    const { Title } = Typography;
    return (
        <div>
            <Title>Adding New User</Title>
            <StyledForm
                form={form}
                name='add-new-user'
                layout='vertical'
            >
                <StyledForm.Item
                    label='First name'
                    name='firstname'
                    required
                    tooltip='Required field'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your first name!',
                        },
                    ]}
                >
                    <Input placeholder='First Name' />
                </StyledForm.Item>
                <StyledForm.Item
                    label='Last name'
                    name='lastname'
                    required
                    tooltip='Required field'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your last name!',
                        },
                    ]}
                >
                    <Input placeholder='Last Name' />
                </StyledForm.Item>
                <StyledForm.Item
                    label="Email"
                    name="email"
                    required
                    tooltip="This is a required field"
                    rules={[
                        {
                        required: true,
                        message: "Please enter your email!",
                        type: "email",
                        },
                    ]}
                    >
                    <Input placeholder="Email" />
                </StyledForm.Item>
            </StyledForm>
        </div>
    )
}

export default Form;
