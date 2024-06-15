import { getTodoListUseCase } from "./../dependencies";
import { useEffect } from "react";
import { useStore } from "./useStore";

export const useLoadTodos = () => {
  const setTodoList = useStore((state) => state.setTodoList);

  useEffect(() => {
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
  }, []);
};
