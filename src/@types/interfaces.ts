export interface ITodoItem {
  title: string;
  description: string;
  isCompleted: boolean;
  id: number;
  createdDate: string;
  completedDate: string;
}

export type FormSubmitType = React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>;
