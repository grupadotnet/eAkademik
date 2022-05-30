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
                            whitespace: false,
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
                            whitespace: false,
                        },
                    ]}
                >
                    <Input placeholder='Last Name' />
                </StyledForm.Item>
                <StyledForm.Item
                    label='Email'
                    name='email'
                    required
                    tooltip='Required field'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                            type: 'email',
                        },
                    ]}
                    >
                    <Input placeholder='Email' />
                </StyledForm.Item>
                <StyledForm.Item
                    label='Password'
                    name='password'
                    required
                    tooltip='Required field'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password',
                        },
                    ]}
                >
                    <Input.Password placeholder='Password' />
                </StyledForm.Item>
                <StyledForm.Item
                    label='Confirm password'
                    name='confirmpassword'
                    required
                    tooltip='Required field'
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                else {
                                    return Promise.reject('Passwords do not match!');
                                }
                            }
                        })
                    ]}
                >
                    <Input.Password placeholder='Confirm password' />
                </StyledForm.Item>
            </StyledForm>
        </div>
    )
}

export default Form;
