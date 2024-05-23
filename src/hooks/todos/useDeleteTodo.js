import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteTodo as deleteTodoApi } from "@/service/todos.service";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (todoId) => await deleteTodoApi(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return {
    deleteTodo: mutate,
    isPending,
  };
};
