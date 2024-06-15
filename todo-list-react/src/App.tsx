import { useEffect } from "react";
import { TodoAdd } from "./components/TodoAdd";
import { TodoListComponent } from "./components/TodoList";
import { useLoadTodoList } from "./hooks/useLoadTodoList";

function App() {
  const { reloadTodoList } = useLoadTodoList();

  useEffect(() => {
    reloadTodoList();
  }, [reloadTodoList]);

  return (
    <div className="w-full sm:w-[768px] mx-auto mt-4 p-4 border">
      <TodoAdd />
      <TodoListComponent />
    </div>
  );
}

export default App;
