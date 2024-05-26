import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createUserFromAuth,
  login as loginApi,
} from "@/service/authentication.service";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await loginApi({ email, password }),
    onSuccess: async (data) => {
      const user = {
        uid: data.uid,
        displayName: data.displayName,
        email: data.email,
        photoURL: data.photoURL,
      };

      await createUserFromAuth(data);

      queryClient.setQueryData(["user"], user);

      toast.success("Successfully login");

      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    login: mutate,
    isPending,
  };
};
