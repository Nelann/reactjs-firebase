import { deleteTodo as deleteTodoApi } from "@/service/todos.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (todoId) => await deleteTodoApi(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => console.error(error),
  });

  return {
    deleteTodo: mutate,
    isPending,
  };
};
