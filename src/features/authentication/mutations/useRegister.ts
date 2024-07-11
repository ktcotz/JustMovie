import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/services";

export const useRegister = () => {
  const {
    mutate: signup,
    isPending: isRegistering,
    error: signupError,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: registerUser,
    onSuccess: () => {
      console.log("POMYSLNIE!");
    },
  });

  return { signup, isRegistering, signupError } as const;
};
