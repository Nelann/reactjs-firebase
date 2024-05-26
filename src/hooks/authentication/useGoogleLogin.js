import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  createUserFromAuth,
  loginWithGoogle as loginWithGoogleApi,
} from "@/service/authentication.service";

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async () => await loginWithGoogleApi(),
    onSuccess: async (data) => {
      console.log(data);

      await createUserFromAuth(data);
      toast.success("Successfully login with google account");
      navigate("/", { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });

  return {
    loginWithGoogle: mutate,
  };
};
