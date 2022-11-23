import { ITodoItem } from './interfaces';

export interface IState {
  todos: ITodoItem[];
  todo: ITodoState;
}

export interface ITodoState {
  todo: ITodoItem;
  status: 'loading' | 'fulfilled' | 'error' | 'init';
}
