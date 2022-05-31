import {
  Form as AForm, Input, Row, Typography,
} from 'antd';
import styled from 'styled-components';

import { Button } from '@/components/buttons';
import { Colors } from '@/styles/colors';

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
        name="add-new-user"
        layout="vertical"
      >
        <div className="first-and-last-name-form">
          <StyledForm.Item
            className="form-item"
            label="First name"
            name="firstname"
            required
            tooltip="Required field"
            rules={[
              {
                required: true,
                message: 'Please enter your first name!',
                whitespace: false,
                max: 256,
              },
            ]}
          >
            <Input placeholder="First Name" />
          </StyledForm.Item>
          <StyledForm.Item
            className="form-item"
            label="Last name"
            name="lastname"
            required
            tooltip="Required field"
            rules={[
              {
                required: true,
                message: 'Please enter your last name!',
                whitespace: false,
                max: 256,
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </StyledForm.Item>
        </div>
        <StyledForm.Item
          className="form-item"
          label="Email"
          name="email"
          required
          tooltip="Required field"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
              type: 'email',
              max: 256,
            },
          ]}
        >
          <Input placeholder="Email" />
        </StyledForm.Item>
        <StyledForm.Item
          className="form-item"
          label="Password"
          name="password"
          required
          tooltip="Required field"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
              max: 256,
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </StyledForm.Item>
        <StyledForm.Item
          className="form-item"
          label="Confirm password"
          name="confirmpassword"
          required
          tooltip="Required field"
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
              max: 256,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Passwords do not match!');
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </StyledForm.Item>
        <StyledForm.Item className="submit-btn-parent">
          <Row justify="end">
            <Button type="primary" className="submit-btn">
              Create user
            </Button>
          </Row>
        </StyledForm.Item>
      </StyledForm>
    </div>
  );
};

export default Form;
