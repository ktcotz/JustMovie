import { User } from "@supabase/supabase-js";
import { useGetUser } from "../authentication/mutations/useGetUser";

export const Welcome = () => {
  const { user } = useGetUser();

  const name = (user as User).user_metadata?.name;

  return <h1 className="mb-6 text-xl">Welcome, {name}</h1>;
};
