import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { WiStars } from "react-icons/wi";

export default function MailText() {
  return (
    <div>
      <div className=" p-6">
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your message here."
            className=" h-60 font-medium "
          />
          <Button className=" bg-indigo-200 text-indigo-500 hover:text-white hover:cursor-pointer">
            {" "}
            <WiStars />
            Summarize with AI
          </Button>
        </div>
      </div>
    </div>
  );
}
