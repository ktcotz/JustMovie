import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import { updateAvatar } from "../services/services";

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient();

  const {
    mutate: update,
    isPending: isUpdating,
    error: updateError,
  } = useMutation({
    mutationFn: updateAvatar,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { update, isUpdating, updateError } as const;
};
