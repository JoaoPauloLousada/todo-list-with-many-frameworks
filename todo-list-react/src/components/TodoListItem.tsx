import { ChangeEvent, ChangeEventHandler } from "react";
import { Todo } from "../core/models/Todo";
import {
  deleteTodoUseCase,
  getTodoListUseCase,
  updateTodoUseCase,
} from "../dependencies";
import { useStore } from "../hooks/useStore";

interface Props {
  todo: Todo;
}

export function TodoListItem({ todo }: Props) {
  const setTodoList = useStore((state) => state.setTodoList);

  const revalidateList = ({ error }: { error: Error | null }) => {
    if (error) {
      console.error({ error });
    }

    getTodoListUseCase.execute({
      next: ({ data, error }) => {
        if (error) {
          console.error({ error });
        }
        if (data) {
          setTodoList(data);
        }
      },
    });
  };

  const onDelete = () => {
    deleteTodoUseCase.execute({
      vars: todo.id,
      next: revalidateList,
    });
  };

  const onCheck: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const completed = event.target.checked;
    const updatedTodo = todo.update({ completed });
    updateTodoUseCase.execute({
      vars: updatedTodo,
      next: revalidateList,
    });
  };

  return (
    <div className="flex w-full py-1 gap-4">
      <p className="leading-10 flex-1">{todo.text}</p>
      <p>{todo.completed}</p>
      {todo.datetime && <p>{todo.datetime.toISOString()}</p>}
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
