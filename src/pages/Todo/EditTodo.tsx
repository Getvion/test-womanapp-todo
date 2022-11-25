import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ITodoItem } from '../../@types/interfaces';
import { IState } from '../../@types/reduxStore';
import { useAppDispatch } from '../../app/hooks';
import { Button, Checkbox, Input } from '../../components';
import { pushTodos } from '../../features/todos/todosSlice';
import { formatDate } from '../../helpers';

import styles from './Todo.module.scss';

interface IProps {
  setMode: (arg: boolean) => void;
}

export const EditTodo: React.FC<IProps> = ({ setMode }) => {
  const dispatch = useAppDispatch();
  const { todos } = useSelector((state: IState) => state);
  const { todo } = useSelector((state: IState) => state.todo);

  const [newTodoData, setnewTodoData] = useState<ITodoItem>({ ...todo });
  const [isCompleted, setIsCompleted] = useState(newTodoData.isCompleted);

  const { description, title } = newTodoData;

  const onInputChange = (key: keyof ITodoItem, value: string) => {
    if (key === 'completedDate') {
      const todayDate = `${dayjs().year()}-${dayjs().month()}-${dayjs().date()}`;
      return setnewTodoData({ ...newTodoData, completedDate: formatDate(todayDate || value, '.') });
    }

    setnewTodoData((prevData) => ({ ...prevData, [key]: value }));
  };

  const onSaveChanges = () => {
    const newTodo: ITodoItem = { ...newTodoData, isCompleted };

    const newTodosData: ITodoItem[] = todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo
    );

    dispatch(pushTodos(newTodosData));

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
      <Checkbox
        label='Выполнено'
        checked={isCompleted}
        change={() => setIsCompleted(!isCompleted)}
      />
      <input
        className={styles.edit__date}
        type='date'
        onChange={(e) => onInputChange('completedDate', e.target.value)}
      />

      <Button text='Сохранить' size='big' click={onSaveChanges} icon={false} />
    </div>
  );
};
