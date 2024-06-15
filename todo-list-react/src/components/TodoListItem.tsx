import { ChangeEvent, ChangeEventHandler, useMemo } from "react";
import { Todo } from "../core/models/Todo";
import { deleteTodoUseCase, updateTodoUseCase } from "../dependencies";
import { useLoadTodoList } from "../hooks/useLoadTodoList";

interface Props {
  todo: Todo;
}

export function TodoListItem({ todo }: Props) {
  const { reloadTodoList } = useLoadTodoList();

  const onDelete = () => {
    deleteTodoUseCase.execute({
      vars: todo.id,
      next: reloadTodoList,
    });
  };

  const onCheck: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    updateTodoUseCase.execute({
      vars: todo.update({ completed: event.target.checked }),
      next: reloadTodoList,
    });
  };

  const date = useMemo(() => todo.formatDatetime(), [todo]);

  return (
    <div className="flex w-full py-1 gap-4">
      <p className="leading-10 flex-1">{todo.text}</p>
      <p className="leading-10 flex-1">{todo.completed}</p>
      <p className="leading-10 flex-1">{date}</p>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={onCheck}
      />
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
        onClick={onDelete}
      >
        -
      </button>
    </div>
  );
}
