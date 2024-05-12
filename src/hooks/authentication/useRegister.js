import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  register,
  register as registerApi,
} from "@/service/authentication.service";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await registerApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return {
    register: mutate,
    isPending,
  };
};
