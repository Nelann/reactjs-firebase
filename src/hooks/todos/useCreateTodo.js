import { createTodo as createTodoApi } from "@/service/todos.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (text) => await createTodoApi(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => toast.log(error.message),
  });

  return {
    createTodo: mutate,
    isPending,
  };
};
