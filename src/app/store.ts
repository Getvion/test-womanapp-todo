import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { todo, todos } from '../features';

export const store = configureStore({
  reducer: {
    todos,
    todo
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
