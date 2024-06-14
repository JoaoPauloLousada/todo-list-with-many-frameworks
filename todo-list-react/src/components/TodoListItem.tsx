import { Todo } from "../core/models/Todo";

interface Props {
  todo: Todo;
}

export function TodoListItem({ todo }: Props) {
  return (
    <div className="flex">
      <p>{todo.text}</p>
      <p>{todo.completed}</p>
    </div>
  );
}
