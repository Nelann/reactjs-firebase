import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { toggleTodo as toggleTodoApi } from "@/service/todos.service";

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ todoId, completed }) =>
      toggleTodoApi({ todoId, completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => toast.error(error),
  });

  return {
    toggleTodo: mutate,
    isPending,
  };
};
