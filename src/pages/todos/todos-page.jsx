import { useState } from "react";
import { XIcon, SquareCheckBigIcon } from "lucide-react";

import { useCreateTodo, useDeleteTodo, useTodos, useToggleTodo } from "@/hooks";

export default function TodosPage() {
  const [text, setText] = useState("");

  const { data: todos, isLoading, isSuccess, isError, error } = useTodos();
  const { createTodo, isPending: isPendingCreateTodo } = useCreateTodo();
  const { deleteTodo, isPending: isPendingDeleteTodo } = useDeleteTodo();
  const { toggleTodo } = useToggleTodo();

  const handleAddTodo = async () => {
    if (!text) return;

    await createTodo(text, {
      onSettled: () => {
        setText("");
      },
    });
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    content = (
      <div className="grid grid-cols-1 gap-3">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row items-center justify-between p-3 border rounded-md"
            >
              <p
                className={`text-lg capitalize ${
                  todo.completed && "text-red-500 line-through"
                }`}
              >
                {todo.text}
              </p>
              <div className="flex flex-row items-center gap-2">
                <button
                  title="done-task"
                  onClick={async () => {
                    await toggleTodo({
                      todoId: todo.id,
                      completed: !todo.completed,
                    });
                  }}
                  className="p-2 text-green-500 border rounded-lg shadow-md cursor-pointer"
                >
                  <SquareCheckBigIcon className="w-4 h-4" />
                </button>
                <button
                  title="delete-task"
                  onClick={() => deleteTodo(todo.id)}
                  disabled={isPendingDeleteTodo}
                  className="p-2 text-red-500 border rounded-lg shadow-md cursor-pointer disabled:bg-red-500 disabled:text-white disabled:cursor-not-allowed"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-xl font-medium">TodoList hari ini:</h3>
      </div>
      <div>
        <div className="relative">
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ngelakuin apa nih?.."
            className="w-full border pl-3 pr-28 py-2.5 rounded-md"
          />
          <button
            onClick={handleAddTodo}
            disabled={isPendingCreateTodo}
            className="absolute right-0 h-full px-4 text-white bg-blue-500 rounded-e-md"
          >
            {isPendingCreateTodo ? "Creating" : "Add New"}
          </button>
        </div>
      </div>
      {content}
    </section>
  );
}
