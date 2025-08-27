import { ZapIcon } from "lucide-react";
import React from "react";
import { TypographyLarge } from "../typography/TypographyLarge";

const LandingLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {" "}
      <ZapIcon />
      <TypographyLarge>Ces</TypographyLarge>
    </div>
  );
};

export default LandingLogo;
