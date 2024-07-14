import { useTranslation } from "react-i18next";
import { supabaseUrl } from "../../lib/supabase/supabase";
import { Button } from "../ui/Button";
import { Spinner } from "../ui/Spinner";
import { useGetAvatars } from "./useGetAvatars";

type DefaultAvatarsProps = {
  onSetPreview: (url: string) => void;
};

export const DefaultAvatars = ({ onSetPreview }: DefaultAvatarsProps) => {
  const { avatars, isLoading } = useGetAvatars();
  const { t } = useTranslation();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="mb-8">{t("settings.free-avatars")}</h2>
      <div className="flex max-w-96 flex-wrap gap-4">
        {avatars
          ?.filter((avatar) => avatar.metadata.size > 0)
          .map((avatar) => {
            const url = `${supabaseUrl}/storage/v1/object/public/avatars/default/${avatar.name}`;
            return (
              <Button modifier="avatar" onClick={() => onSetPreview(url)}>
                <img
                  key={avatar.id}
                  src={url}
                  alt={avatar.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-slate-50"
                />
              </Button>
            );
          })}
      </div>
    </div>
  );
};
