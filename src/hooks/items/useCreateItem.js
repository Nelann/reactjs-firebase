import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createItem as createItemApi } from "../../service/items.service";

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (value) => {
      await createItemApi(value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      console.log("Item created");
    },
    onError: () => {
      console.error("Error creating item");
    },
  });

  return {
    createItem: mutate,
    isPending,
    error,
  };
};
