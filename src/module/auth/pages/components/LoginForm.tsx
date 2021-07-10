import React from 'react';
import { Button, Form, Input } from 'antd';

export interface FormProps {
  name: any;
  password: any;
}

interface LoginFormProps {
  handleSubmit: (formData: FormProps) => void;
  loading: boolean;
}

export default function LoginForm(props: LoginFormProps) {
  const { handleSubmit, loading } = props;
  const [form] = Form.useForm<FormProps>();
  return (
    <Form layout='vertical' form={form} onFinish={handleSubmit}>
      <Form.Item name='name' label='姓名' rules={[{ required: true, message: '必填' }]}>
        <Input placeholder='請輸入姓名' />
      </Form.Item>
      <Form.Item name='password' label='密碼'>
        <Input placeholder='請輸入密碼' type='password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={loading}>
          登入
        </Button>
      </Form.Item>
    </Form>
  );
}
