import { useDropzone } from "react-dropzone";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { useState } from "react";
import { Button } from "../ui/Button";
import { DefaultAvatars } from "./DefaultAvatars";
import { useUpdateAvatar } from "./mutations/useUpdateAvatar";
import { supabaseUrl } from "../../lib/supabase/supabase";
import { useTranslation } from "react-i18next";
import { Spinner } from "../ui/Spinner";

export const UserChangeAvatar = () => {
  const { user } = useGetUser();

  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [updateAvatar, setUpdateAvatar] = useState<File | null>(null);
  const { update, isUpdating } = useUpdateAvatar();
  const { t } = useTranslation();

  const setAvatarPreview = (url: string) => {
    setPreview(url);
  };

  const updateAvatarFn = () => {
    update({
      avatarFile: updateAvatar,
      bucket_default: preview?.startsWith(supabaseUrl) ? preview : "",
    });
    setPreview
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (files: File[]) => {
      const file = URL.createObjectURL(files[0]);
      setUpdateAvatar(files[0]);
      setPreview(file);
    },
  });

  return (
    <>
      <h2>{t("settings.update-avatar")}</h2>
      <section className="relative flex items-center justify-center rounded-md bg-slate-900 p-8 text-slate-300">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>{t("settings.dropzone-label")}</p>
        </div>
        <aside className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={preview || user?.user_metadata?.avatar}
            alt="User avatar"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-slate-50"
          />
        </aside>
      </section>
      <DefaultAvatars onSetPreview={setAvatarPreview} />
      {preview && (
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => setPreview(undefined)} modifier="settings">
            {t("settings.not-save-avatar")}
          </Button>
          <Button
            modifier="settings"
            onClick={updateAvatarFn}
            disabled={isUpdating}
          >
            {isUpdating ? <Spinner /> : t("settings.save-avatar")}
          </Button>
        </div>
      )}
    </>
  );
};
