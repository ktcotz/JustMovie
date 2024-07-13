import { useRef, useState } from "react";
import { Button } from "../Button";
import { AvatarTooltip } from "./AvatarTooltip";
import { useOnClickOutside } from "usehooks-ts";

export const Avatar = () => {
  const ref = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useOnClickOutside(ref, () => setShowContent(false));

  return (
    <>
      <div className="relative" ref={ref}>
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
