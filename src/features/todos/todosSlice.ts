import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITodoItem } from '../../@types/interfaces';
import { todosRequests } from '../../api/todos';

const initialState: ITodoItem[] = [];

/**
 * Возвращает массив todo элементов, типа ITodoItem[]
 * @function
 */
export const fetchTodos = createAsyncThunk(
  'fetch-todos',
  async (): Promise<ITodoItem[]> => todosRequests.fetchTodos()
);

export const pushTodos = createAsyncThunk(
  'push-todos-data',
  async (todos: ITodoItem[]): Promise<ITodoItem[]> => todosRequests.pushTodos(todos)
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    emptyTodosState: () => initialState
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (_, action) => action.payload)
      .addCase(pushTodos.fulfilled, (_, action) => action.payload);
  }
});

export const { emptyTodosState } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
