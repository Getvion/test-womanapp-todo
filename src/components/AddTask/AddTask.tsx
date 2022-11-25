import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FormSubmitType, ITodoItem } from '../../@types/interfaces';
import { IState } from '../../@types/reduxStore';
import { useAppDispatch } from '../../app/hooks';
import { pushTodos } from '../../features/todos/todosSlice';
import { Button, Input } from '..';

import styles from './AddTask.module.scss';

const emptyTodo: ITodoItem = {
  completedDate: '',
  createdDate: '',
  description: '',
  id: 0,
  title: '',
  isCompleted: false
};

export const AddTask = () => {
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState<ITodoItem>(emptyTodo);

  const { todos } = useSelector((state: IState) => state);

  const onFormSubmit = (e: FormSubmitType) => {
    e.preventDefault();

    if (!todo.title) return;

    const todayDate = `${dayjs().year()}.${dayjs().month()}.${dayjs().date()}`;
    const todoId = todos[todos.length - 1].id + 1;

    const newTodo = { ...todo, createdDate: todayDate, completedDate: todayDate, id: todoId };

    dispatch(pushTodos([newTodo, ...todos]));

    setTodo(emptyTodo);
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.container}>
      <Input
        size='long'
        change={(e) => setTodo({ ...todo, title: e.target.value })}
        value={todo.title}
        placeholder='Заголовок задачи'
      />
      <Button type='submit' click={onFormSubmit} text='Создать' />
    </form>
  );
};
