import { useState } from "react";
import { useForm } from "react-hook-form";
import { createTodoUseCase, getTodoListUseCase } from "../dependencies";
import { Todo } from "../core/models/Todo";
import { useStore } from "../hooks/useStore";

type TodoAddStatus = "inactive" | "active";
type FormInputData = {
  text: string;
  datetime: string;
};

export function TodoAdd() {
  const [status, setStatus] = useState<TodoAddStatus>("inactive");
  const { register, handleSubmit, reset } = useForm<FormInputData>();
  const setTodoList = useStore((state) => state.setTodoList);

  const onSubmit = (data: FormInputData) => {
    let todo = Todo.create({ text: data.text });
    if (data.datetime) {
      todo = todo.update({ datetime: new Date(data.datetime) });
    }
    createTodoUseCase.execute({
      vars: todo,
      next: () => {
        getTodoListUseCase.execute({
          next: ({ data, error }) => {
            if (error) {
              console.error({ error });
            }
            if (data) {
              setTodoList(data);
            }
            reset();
            setStatus("inactive");
          },
        });
      },
    });
  };

  const cancel = () => {
    setStatus("inactive");
    reset();
  };

  if (status === "inactive") {
    return (
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setStatus("active")}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <form
      className="w-full flex flex-1 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Todo text"
        {...register("text")}
      />
      <input
        type="datetime-local"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("datetime")}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        confirm
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
        onClick={() => cancel()}
      >
        cancel
      </button>
    </form>
  );
}
