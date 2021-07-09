import { Space, Table } from 'antd';
import React from 'react';
import useTodoService, { TodoDataProps, TodoService } from './useTodoService';
import TableHandler from './Table';
import TodoListInput from './TodoListInput';

const TABLE_COLUMN = [
  { title: '标题', dataIndex: 'title' },
  { title: '详情', dataIndex: 'description' },
  {
    title: '操作',
    render: (res: TodoDataProps) => {
      return <TableHandler title={res.title} />;
    },
  },
];

export default function TodoList() {
  const todoService = useTodoService();
  return (
    <TodoService.Provider value={todoService}>
      <Space direction='vertical' style={{ width: '100%' }}>
        <TodoListInput />
        <Table dataSource={todoService.todoList} columns={TABLE_COLUMN} rowKey='title' />
      </Space>
    </TodoService.Provider>
  );
}
