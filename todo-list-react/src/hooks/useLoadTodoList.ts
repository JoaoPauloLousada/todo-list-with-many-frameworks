import { getTodoListUseCase } from "../dependencies";
import { useCallback } from "react";
import { useStore } from "./useStore";

export const useLoadTodoList = () => {
  const setTodoList = useStore((state) => state.setTodoList);

  const reloadTodoList = useCallback(() => {
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
  }, [setTodoList]);

  return { reloadTodoList };
};
