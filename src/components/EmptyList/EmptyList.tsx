import React from 'react';

import logo from '../../assets/images/todo-list-icon.png';

import styles from './EmptyList.module.scss';

export const EmptyList = () => (
  <div className={styles.container}>
    <img className={styles.image} src={logo} alt='список' />
    <p className={styles.text}>У вас нет ни одной задачи</p>
  </div>
);
