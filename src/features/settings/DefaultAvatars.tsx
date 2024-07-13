import { supabaseUrl } from "../../lib/supabase/supabase";
import { Button } from "../ui/Button";
import { Spinner } from "../ui/Spinner";
import { useGetAvatars } from "./useGetAvatars";

type DefaultAvatarsProps = {
  onSetPreview: (url: string) => void;
};

export const DefaultAvatars = ({ onSetPreview }: DefaultAvatarsProps) => {
  const { avatars, isLoading } = useGetAvatars();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="mb-8">Skorzystaj z darmowych avatarów</h2>
      <div className="flex max-w-96 flex-wrap gap-4">
        {avatars?.map((avatar) => (
          <Button
            modifier="avatar"
            onClick={() =>
              onSetPreview(
                `${supabaseUrl}/storage/v1/object/public/avatars/${avatar.name}`,
              )
            }
          >
            <img
              key={avatar.id}
              src={`${supabaseUrl}/storage/v1/object/public/avatars/${avatar.name}`}
              alt={avatar.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-slate-50"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};
