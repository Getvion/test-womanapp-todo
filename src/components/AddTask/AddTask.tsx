import React from 'react';

import { Button, Input } from '..';

import styles from './AddTask.module.scss';

export const AddTask = () => (
  <div className={styles.container}>
    <Input size='long' change={() => {}} value='' placeholder='Заголовок задачи' />
    <Button click={() => {}} text='Создать' />
  </div>
);
