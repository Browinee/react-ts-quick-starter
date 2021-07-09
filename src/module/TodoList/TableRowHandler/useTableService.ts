import React, { useCallback, useContext, useMemo, useState } from 'react';
import useTodoService, { TodoDataProps, TodoService } from '../useTodoService';

export interface TableServiceProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  currentItem: TodoDataProps;
  setCurrentItemWithDescription: (description: string) => void;
  deleteCurrentItem: () => void;
}
export const TableService = React.createContext<TableServiceProps>({
  title: '',
  setTitle: () => {},
  currentItem: { title: '', description: '' },
  deleteCurrentItem: () => {},
  setCurrentItemWithDescription: (description) => {},
});

export default function useTableService(): TableServiceProps {
  const [title, setTitle] = useState('');
  const todoService = useContext(TodoService);
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
      todoService.setTodoList((res: TodoDataProps[]) => {
        return res.map((el: TodoDataProps) => {
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
    todoService.setTodoList((res: TodoDataProps[]) => {
      return res.filter((el: TodoDataProps) => el.title !== title);
    });
  }, [title, todoService]);
  return {
    title,
    setTitle,
    currentItem,
    setCurrentItemWithDescription,
    deleteCurrentItem,
  };
}
