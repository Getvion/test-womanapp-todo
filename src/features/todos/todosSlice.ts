import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITodos } from '../../@types/reduxStore';
import { data } from '../../fakeData';

const initialState: ITodos = {
  todos: []
};

export const fetchTodos = createAsyncThunk('fetch-todos', () => data);

const todoSSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    emptyTodosState: () => initialState
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  }
});

export const { emptyTodosState } = todoSSlice.actions;

export const todosReducer = todoSSlice.reducer;
