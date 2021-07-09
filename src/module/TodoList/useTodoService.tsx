import { useLocalStorageState, useMount } from 'ahooks';
import React, { useContext, useEffect, useState } from 'react';

export interface TodoDataProps {
  title: string;
  description: string;
}

export interface TodoContextType {
  todoList: TodoDataProps[];
  setTodoList: any;
}
export const TodoService = React.createContext<TodoContextType | null>(null);

export default function useTodoService() {
  const [todoList, setTodoList] = useState<TodoDataProps[]>([]);
  const [stored, setStored] = useLocalStorageState<TodoDataProps[]>('todoList', []);
  useMount(() => {
    if (stored) {
      setTodoList(stored);
    }
  });
  useEffect(() => {
    if (todoList !== stored) {
      setStored(todoList);
    }
  }, [todoList, setStored, stored]);
  return {
    todoList,
    setTodoList,
  };
}

export const useTodo = () => {
  const context = useContext(TodoService);
  if (!context) {
    throw new Error('useTodo should be under provider');
  }
  return context as TodoContextType;
};
