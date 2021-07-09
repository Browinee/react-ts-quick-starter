import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import useTodoInputService from './useTodoInputService';

export default function TodoListInput() {
  const todoInputService = useTodoInputService();
  return (
    <Card>
      <Form form={todoInputService.form} onFinish={todoInputService.handleSubmit}>
        <Form.Item name='title' label='標題' rules={[{ required: true, message: '標題為必填' }]}>
          <Input />
        </Form.Item>
        <Form.Item name='description' label='詳情'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            新增
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
