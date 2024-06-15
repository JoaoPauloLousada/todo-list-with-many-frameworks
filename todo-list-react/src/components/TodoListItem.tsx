import { Todo } from "../core/models/Todo";

interface Props {
  todo: Todo;
}

export function TodoListItem({ todo }: Props) {
  return (
    <div className="flex w-full py-1 gap-4">
      <p className="leading-10 flex-1">{todo.text}</p>
      <p>{todo.completed}</p>
      <input type="checkbox" defaultChecked={todo.completed} />
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
      >
        -
      </button>
    </div>
  );
}
