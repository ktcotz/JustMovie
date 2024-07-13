import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import { updateUserName } from "../services/services";

export const useUpdateUserData = () => {
  const queryClient = useQueryClient();

  const {
    mutate: update,
    isPending: isUpdating,
    error: updateError,
  } = useMutation({
    mutationFn: updateUserName,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { update, isUpdating, updateError } as const;
};
