import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IState } from '../../@types/reduxStore';
import { useAppDispatch } from '../../app/hooks';
import { Button, Loader } from '../../components';
import { emptyTodoState, fetchTodoData } from '../../features/todo/todoSlice';
import { fetchTodos, pushTodos } from '../../features/todos/todosSlice';
import { compareTwoDates, formatDate } from '../../helpers';

import { EditTodo } from './EditTodo';

import styles from './Todo.module.scss';

export const Todo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  const { todo, status } = useSelector((state: IState) => state.todo);
  const { todos } = useSelector((state: IState) => state);

  const onEditClick = () => {
    setIsEditModeEnabled(!isEditModeEnabled);
  };

  const onDeleteClick = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    dispatch(pushTodos(newTodos));
    dispatch(fetchTodos());
    navigate('/');
  };

  useEffect(() => {
    const todoId = window.location.pathname.split('/').reverse()[0];
    dispatch(fetchTodoData(Number(todoId)));

    return () => {
      dispatch(emptyTodoState());
    };
  }, []);

  const { completedDate, createdDate, description, id, title } = todo;

  const isCompletedDateExpired = compareTwoDates(completedDate);

  if (isEditModeEnabled) return <EditTodo setMode={setIsEditModeEnabled} />;

  return (
    <div className={styles.container}>
      {status === 'fulfilled' && id ? (
        <div className={styles.todo}>
          <div className={styles.todo__dates}>
            <span className={styles.todo__created}>
              Дата создания: {formatDate(createdDate, '.')}
            </span>
            <span
              className={clsx(styles.todo__completed, {
                [styles.expired]: isCompletedDateExpired
              })}
            >
              Дата выполнения: {formatDate(completedDate, '.')}
            </span>
          </div>
          <h2 className={clsx(styles.todo__title)}>{title}</h2>
          <p className={styles.todo__description}>{description}</p>
          <div className={styles.todo__buttons}>
            <Button text='Редактировать' click={onEditClick} icon={false} size='medium' />
            <Button text='Удалить' click={() => onDeleteClick(id)} icon={false} size='medium' />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
