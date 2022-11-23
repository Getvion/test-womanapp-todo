import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { ITodoItem } from '../../@types/reduxStore';
import { Button } from '../../components';

import styles from './Todos.module.scss';

export const TodosItem: React.FC<ITodoItem> = ({ id, isCompleted, title }) => (
  <Link className={styles.item} to={`/todo/${id}`}>
    <h3 className={clsx(styles.title, { [styles.completed]: isCompleted })}>{title}</h3>
    <Button click={() => {}} icon={false} size='small' text='Открыть' />
  </Link>
);
