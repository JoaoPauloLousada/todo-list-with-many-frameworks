import { TodoAdd } from "./components/TodoAdd";
import { TodoListComponent } from "./components/TodoList";
import { useLoadTodos } from "./hooks/useLoadTodos";

function App() {
  useLoadTodos();
  return (
    <div className="w-full sm:w-[768px] mx-auto mt-4 p-4 border">
      <TodoAdd />
      <TodoListComponent />
    </div>
  );
}

export default App;
