import { useRef, useState } from "react";
import { Button } from "../Button";
import { AvatarTooltip } from "./AvatarTooltip";
import { useOnClickOutside } from "usehooks-ts";
import { useGetUser } from "../../authentication/mutations/useGetUser";

export const Avatar = () => {
  const { user } = useGetUser();

  const ref = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useOnClickOutside(ref, () => setShowContent(false));

  return (
    <>
      {user && (
        <div className="relative" ref={ref}>
          <Button
            modifier="avatar"
            onClick={() => setShowContent((prevShowState) => !prevShowState)}
          >
            <img
              src={user.user_metadata?.avatar}
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-slate-50"
            />
          </Button>
          {showContent && <AvatarTooltip />}
        </div>
      )}
    </>
  );
};
