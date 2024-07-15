import { useMutation, useQueryClient } from "@tanstack/react-query";
import { manageBookmark } from "../services/services";

export const useManageBookmark = () => {
  const queryClient = useQueryClient();
  const { mutate: manage, isPending } = useMutation({
    mutationFn: manageBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  return { manage, isPending } as const;
};
