import { Space } from 'antd';
import React, { PropsWithoutRef, useEffect } from 'react';
import useTableService, { TableService } from './useTableService';
import DeleteButton from './component/DeleteButton';
import EditButton from './component/EditButton';

export default function TableHandler(props: PropsWithoutRef<{ title: string }>) {
  const tableHandlerService = useTableService();
  useEffect(() => {
    tableHandlerService.setTitle(props.title);
  }, [props, tableHandlerService]);
  return (
    <TableService.Provider value={tableHandlerService}>
      <Space>
        <DeleteButton />
        <EditButton />
      </Space>
    </TableService.Provider>
  );
}
