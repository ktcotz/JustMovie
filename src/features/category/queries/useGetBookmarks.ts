import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../services/services";
import { useGetUser } from "../../authentication/mutations/useGetUser";
import { User } from "@supabase/supabase-js";

export const useGetBookmarks = () => {
  const { user } = useGetUser();

  const { data: bookmarks, isLoading } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => getBookmarks({ user_id: (user as User).id }),
  });

  return { bookmarks, isLoading } as const;
};
