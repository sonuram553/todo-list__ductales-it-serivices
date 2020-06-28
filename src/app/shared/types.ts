export interface Todo {
  title: string;
  description: string;
  repeating_task: 'yes' | 'no';
  completed: boolean | null;
}
