import { Button, Input, Modal } from 'antd';
import React from 'react';
import { useTable } from '../useTableService';

export default function EditButton() {
  const tableService = useTable();
  return (
    <Button
      type='primary'
      onClick={() => {
        Modal.confirm({
          title: `編輯: ${tableService.title}`,
          content: (
            <Input
              defaultValue={tableService.currentItem.description}
              onInput={(e: any) => {
                tableService.setCurrentItemWithDescription(e.target.value);
              }}
            />
          ),
        });
      }}
    >
      編輯
    </Button>
  );
}
