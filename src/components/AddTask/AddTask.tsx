import React from 'react';

import { Button, Input } from '..';

import styles from './AddTask.module.scss';

export const AddTask = () => (
  <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
    <Input size='long' change={() => {}} value='' placeholder='Заголовок задачи' />
    <Button type='submit' click={() => {}} text='Создать' />
  </form>
);
