import { useState } from "react";
import { Button } from "../Button";
import { AvatarTooltip } from "./AvatarTooltip";

export const Avatar = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div className="relative">
        <Button
          modifier="avatar"
          onClick={() => setShowContent((prevShowState) => !prevShowState)}
        >
          <img
            src="./images/user.png"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-slate-50"
          />
        </Button>
        {showContent && <AvatarTooltip />}
      </div>
    </>
  );
};
