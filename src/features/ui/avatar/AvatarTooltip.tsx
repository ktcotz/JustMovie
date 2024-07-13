import { Button } from "../Button";
import { CustomLink } from "../CustomLink";

export const AvatarTooltip = () => {
  return (
    <div className="absolute -bottom-2 left-14 flex w-52 -translate-x-full translate-y-full flex-col gap-4 rounded-md bg-slate-800 p-6 shadow-md md:bottom-32 md:left-64 md:-translate-x-full md:translate-y-full">
      <Button modifier="tooltip">Sign out</Button>
      <CustomLink to={"settings"} type="primary">
        Settings
      </CustomLink>
    </div>
  );
};
