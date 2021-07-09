import { Button } from 'antd';
import React from 'react';
import { useTable } from 'Src/module/TodoList/Table/useTableService';

export default function DeleteButton() {
  const tableService = useTable();
  return (
    <Button type='primary' onClick={tableService.deleteCurrentItem} danger>
      刪除
    </Button>
  );
}
