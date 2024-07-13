import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import { updatePassword } from "../services/services";

export const useUpdateUserPassword = () => {
  const {
    mutate: update,
    isPending: isUpdating,
    error: updateError,
  } = useMutation({
    mutationFn: updatePassword,

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { update, isUpdating, updateError } as const;
};
