import { child, get, ref, set } from 'firebase/database';

import { ITodoItem } from '../@types/interfaces';
import { db } from '../firebase';

const fetchTodo = async (todoId: number): Promise<ITodoItem> => {
  const dbRef = ref(db);
  const data = await get(child(dbRef, `todos/${todoId}`)).then((todo) => todo.val());

  return data;
};

const fetchTodos = async (): Promise<ITodoItem[]> => {
  const dbRef = ref(db);
  const data = await get(child(dbRef, 'todos')).then((todo) => todo.val());

  return data;
};

const pushTodos = async (todos: ITodoItem[]): Promise<void> => {
  const dbRef = ref(db);
  await set(child(dbRef, 'todos'), todos);
};

export const todosRequests = { fetchTodo, fetchTodos, pushTodos };
