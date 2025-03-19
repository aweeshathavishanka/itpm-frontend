import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarAccountViewProps = {
  imageUrl: string;
  email: string;
  size?: number;
};

const SidebarAccountView: React.FC<SidebarAccountViewProps> = ({
  imageUrl,
  email,
  size = 32,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src={imageUrl}
            alt="Account Profile Picture"
            width={size}
            height={size}
            className="rounded-full object-cover w-8 h-8"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{email}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarAccountView;
