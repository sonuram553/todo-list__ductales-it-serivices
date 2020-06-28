export interface Todo {
  id:number;
  title: string;
  description: string;
  repeating_task: 'yes' | 'no';
  completed: boolean | null;
}
