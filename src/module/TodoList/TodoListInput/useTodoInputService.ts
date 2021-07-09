import { Form, FormInstance, message } from 'antd';
import { useCallback } from 'react';
import useTodoService, { useTodo } from '../useTodoService';

type UseTodoInputServiceType = {
  form: FormInstance;
  handleSubmit: (formData: any) => void;
};

export default function useTodoInputService(): UseTodoInputServiceType {
  const [form] = Form.useForm();
  const todoService = useTodoService();
  const handleSubmit = useCallback(
    (formData) => {
      const exist = todoService.todoList.find((el: any) => el.title === formData.title);
      if (exist) {
        message.warning('此標題已存在');
        return;
      }
      todoService.setTodoList((res: any) => [...res, formData]);
      form.resetFields();
    },
    [todoService, form],
  );
  return {
    form,
    handleSubmit,
  };
}
