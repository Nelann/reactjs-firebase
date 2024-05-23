import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { register as registerApi } from "@/service/authentication.service";

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await registerApi({ email, password }),
    onSuccess: () => {
      toast.success("Successfully register");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    register: mutate,
    isPending,
  };
};
