import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginWithGoogle as loginWithGoogleApi } from "@/service/authentication.service";

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async () => await loginWithGoogleApi(),
    onSuccess: () => {
      toast.success("Successfully login with google account");
      navigate("/", { replace: true });
    },
  });

  return {
    loginWithGoogle: mutate,
  };
};
