import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITodoItem } from '../../@types/interfaces';
import { ITodoState } from '../../@types/reduxStore';
import { todosRequests } from '../../api/todos';

export const fetchTodoData = createAsyncThunk(
  'fetch-todo',
  async (todoId: number): Promise<ITodoItem> => todosRequests.fetchTodo(todoId)
);

const initialState: ITodoState = {
  todo: {
    title: '',
    description: '',
    isCompleted: false,
    id: 0,
    createdDate: '',
    completedDate: ''
  },
  status: 'init'
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    emptyTodoState: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoData.fulfilled, (state, action) => {
      state.todo = action.payload;
      state.status = 'fulfilled';
    });
  }
});

export const { emptyTodoState } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
