import { useGetUser } from "../authentication/mutations/useGetUser";

export const useGetName = () => {
  const { user } = useGetUser();
};
