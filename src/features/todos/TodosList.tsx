import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../@types/reduxStore';
import { useAppDispatch } from '../../app/hooks';
import { Loader } from '../../components';

import { TodosItem } from './TodosItem';
import { fetchTodos } from './todosSlice';

import styles from './Todos.module.scss';

export const TodosList = () => {
  const dispatch = useAppDispatch();

  const { todos } = useSelector((state: IState) => state);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const todosCount = todos?.length;
  const todosCompletedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.container}>
      {todos?.length ? (
        <>
          <div className={styles.stats}>
            <span className={styles.stats__text}>
              Задач <span className={styles.stats__number}>{todosCount}</span>
            </span>
            <span className={styles.stats__text}>
              Выполнено
              <span className={styles.stats__number}>
                {todosCompletedCount} из {todosCount}
              </span>
            </span>
          </div>
          <div className={styles.list}>
            {todos.map((todo, index) => (
              <TodosItem key={todo.id} index={index} {...todo} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
