import { toggleTodo as toggleTodoApi } from "@/service/todos.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ todoId, completed }) =>
      toggleTodoApi({ todoId, completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => console.error(error),
  });

  return {
    toggleTodo: mutateAsync,
    isPending,
  };
};
