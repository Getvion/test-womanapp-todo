import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITodoItem } from '../../@types/interfaces';
import { data } from '../../fakeData';

const initialState: ITodoItem[] = [];

export const fetchTodos = createAsyncThunk('fetch-todos', async () => data);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    emptyTodosState: () => initialState
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => action.payload);
  }
});

export const { emptyTodosState } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
