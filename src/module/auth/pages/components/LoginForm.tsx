import React from 'react';
import { Button, Form, Input } from 'antd';

export default function LoginForm() {
  return (
    <Form layout='vertical' onFinish={() => {}}>
      <Form.Item name='name' label='姓名' rules={[{ required: true, message: '必填' }]}>
        <Input placeholder='請輸入姓名' />
      </Form.Item>
      <Form.Item name='passsword' label='密碼'>
        <Input placeholder='請輸入密碼' type='password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' block loading={false}>
          登入
        </Button>
      </Form.Item>
    </Form>
  );
}
