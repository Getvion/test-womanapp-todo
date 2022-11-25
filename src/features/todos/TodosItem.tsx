import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { ITodoItem } from '../../@types/interfaces';
import { Button } from '../../components';

import styles from './Todos.module.scss';

interface IProps extends ITodoItem {
  index: number;
}

export const TodosItem: React.FC<IProps> = ({ isCompleted, title, index }) => (
  <Link className={styles.item} to={`/todo/${index}`}>
    <h3 className={clsx(styles.title, { [styles.completed]: isCompleted })}>{title}</h3>
    <Button click={() => {}} icon={false} size='small' text='Открыть' />
  </Link>
);
