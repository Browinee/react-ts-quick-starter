import React, { useCallback, useContext, useMemo, useState } from 'react';
import useTodoService, { TodoDataProps } from '../useTodoService';

export interface TableServiceProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  currentItem: TodoDataProps;
  setCurrentItemWithDescription: (description: string) => void;
  deleteCurrentItem: () => void;
}
export const TableService = React.createContext<TableServiceProps | null>(null);

export default function useTableService(): TableServiceProps {
  const [title, setTitle] = useState('');
  const todoService = useTodoService();
  const currentItem = useMemo(
    () =>
      todoService.todoList.find((el: any) => el.title === title) || {
        title: '',
        description: '',
      },
    [title, todoService],
  );
  const setCurrentItemWithDescription = useCallback(
    (description: string) => {
      todoService.setTodoList((res: any) => {
        return res.map((el: any) => {
          if (el.title === title) {
            return { ...el, description };
          }
          return el;
        });
      });
    },
    [todoService, title],
  );
  const deleteCurrentItem = useCallback(() => {
    todoService.setTodoList((res: any) => res.filter((el: any) => el.title !== title));
  }, [title, todoService]);
  return {
    title,
    setTitle,
    currentItem,
    setCurrentItemWithDescription,
    deleteCurrentItem,
  };
}

export const useTable = (): TableServiceProps => {
  const context = useContext(TableService);
  if (!context) {
    throw new Error('useTable should under TableService');
  }
  return context;
};
