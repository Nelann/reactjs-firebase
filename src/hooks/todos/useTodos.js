import { useQuery } from "@tanstack/react-query";

import { getTodos } from "@/service/todos.service";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => await getTodos(),
  });
};
