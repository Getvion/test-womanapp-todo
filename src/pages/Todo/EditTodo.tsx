import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ITodoItem } from '../../@types/interfaces';
import { IState } from '../../@types/reduxStore';
import { Button, Input } from '../../components';
import { formatDate } from '../../helpers';

import styles from './Todo.module.scss';

interface IProps {
  setMode: (arg: boolean) => void;
}

export const EditTodo: React.FC<IProps> = ({ setMode }) => {
  const { todos } = useSelector((state: IState) => state);
  const { todo } = useSelector((state: IState) => state.todo);

  const [newTodoData, setnewTodoData] = useState<ITodoItem>(todo);

  const { description, title } = newTodoData;

  const onInputChange = (key: keyof ITodoItem, value: string) => {
    if (key === 'completedDate') {
      return setnewTodoData({ ...newTodoData, completedDate: formatDate(value, '.') });
    }

    setnewTodoData((prevData) => ({ ...prevData, [key]: value }));
  };

  const onSaveChanges = (data: ITodoItem) => {
    // push data
    // fetch data
    console.log(data);
    setMode(false);
  };

  return (
    <div className={styles.edit}>
      <Input change={(e) => onInputChange('title', e.target.value)} value={title} size='full' />

      <textarea
        className={styles.edit__description}
        value={description}
        onChange={(e) => onInputChange('description', e.target.value)}
      />
      <input
        className={styles.edit__date}
        type='date'
        onChange={(e) => onInputChange('completedDate', e.target.value)}
      />
      <Button text='Сохранить' size='big' click={() => onSaveChanges(newTodoData)} icon={false} />
    </div>
  );
};
