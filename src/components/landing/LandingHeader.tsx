import React from "react";
import LandingLogo from "@/components/landing/LandingLogo";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LandingHeader = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b p-4 backdrop-blur-md">
      <div className="flex h-8 items-center space-x-4 text-sm">
        <LandingLogo />
        <Separator orientation="vertical" decorative />
        <Search />
      </div>
      <div className="flex h-8 items-center space-x-4">
        <Button>Version</Button>
        <Separator orientation="vertical" decorative />
        <Button>Login</Button>
        <Separator orientation="vertical" decorative />
        <ModeToggle />
      </div>
    </div>
  );
};

export default LandingHeader;
