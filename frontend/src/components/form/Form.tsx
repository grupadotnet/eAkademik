import { Form as AForm, Button, Input, Typography } from 'antd';

import styled from 'styled-components';

import { Colors } from '@/styles/colors';
import { darken } from 'polished';

const StyledForm = styled(AForm)`
  background: ${Colors.onPrimary};
  border: 1px solid ${Colors.shadow};
  padding: 20px;
  border-radius: 10px;

  .first-and-last-name-form {
      display: flex;
      justify-content: space-between;
      gap: 30px;
  }

  .first-and-last-name-form > * {
    width: 100%;
  }

  .first-and-last-name-form Input {
    width: 100%;
  }

  .form-item.label {
    border: 1px blue solid;
  }

  .submit-btn-parent {
    width: 100%;
  }

  .submit-btn {
    cursor: pointer;
    border-radius: 5px;
    background-color: ${Colors.button};
    transition: all 0.5s;
    border: none;
  }

  .submit-btn:hover {
    background-color: ${darken(0.04, Colors.button)};
  }

  Input {
    border-radius: 5px;
  }
`;

const Form: React.VFC = () => {
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
        <div className='first-and-last-name-form'> 
          <StyledForm.Item
            className='form-item'
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
            className='form-item'
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
        </div>
        <StyledForm.Item
          className='form-item'
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
          className='form-item'
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
          className='form-item'
          label='Confirm password'
          name='confirmpassword'
          required
          tooltip='Required field'
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                else {
                  return Promise.reject('Passwords do not match!');
                }
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm password' />
        </StyledForm.Item>
        <StyledForm.Item className='submit-btn-parent'>
            <Button type='primary' className='submit-btn'>
                Create user
            </Button>
        </StyledForm.Item>
      </StyledForm>
    </div>
  );
};

export default Form;
