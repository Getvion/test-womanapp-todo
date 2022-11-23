export interface IState {
  todos: ITodos;
}

export interface ITodos {
  todos: {
    title: string;
    description: string;
    isCompleted: boolean;
    id: number;
    createdDate: string;
    completedDate: string;
  }[];
}
