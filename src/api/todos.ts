import { child, get, ref, set } from 'firebase/database';

import { ITodoItem } from '../@types/interfaces';
import { db } from '../firebase';

/**
 * Возвращает один todo элемент
 * @function
 * @param {number} todoId - index todo элемента
 */
const fetchTodo = async (todoId: number): Promise<ITodoItem> => {
  const dbRef = ref(db);
  const data = await get(child(dbRef, `todos/${todoId}`)).then((todo) => todo.val());

  return data;
};

/**
 * Возвращает массив todo элементов, типа ITodoItem[]
 * @function
 */
const fetchTodos = async (): Promise<ITodoItem[]> => {
  const dbRef = ref(db);
  const data = await get(child(dbRef, 'todos')).then((todo) => todo.val());

  return data;
};

/**
 * Возвращает массив todo элементов, типа ITodoItem[]
 * @function
 * @param {ITodoItem[]} todos - массив todo элементов,
 */
const pushTodos = async (todos: ITodoItem[]): Promise<ITodoItem[]> => {
  const dbRef = ref(db);
  await set(child(dbRef, 'todos'), todos);

  return fetchTodos();
};

export const todosRequests = { fetchTodo, fetchTodos, pushTodos };
