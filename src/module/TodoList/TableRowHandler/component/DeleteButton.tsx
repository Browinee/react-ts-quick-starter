import { Button } from 'antd';
import React, { useContext } from 'react';
import { TableService } from '../useTableService';

export default function DeleteButton() {
  const tableService = useContext(TableService);
  return (
    <Button type='primary' onClick={tableService.deleteCurrentItem} danger>
      刪除
    </Button>
  );
}
