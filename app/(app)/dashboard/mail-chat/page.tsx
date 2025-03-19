import ChatComponent from "@/components/shared/dashboard/mail/ChatComponent";
import MailHeader from "@/components/shared/dashboard/mail/MailHeader";
import MailText from "@/components/shared/dashboard/mail/MailText";
import SummarizeText from "@/components/shared/dashboard/mail/SummarizeText";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function page() {
  return (
    <div>
      <MailHeader />

      <Separator />
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" col-span-2 p-6 border-r ">
            <ChatComponent />
          </div>
          <div>
            <MailText />
            <Separator />
            <SummarizeText />
          </div>
        </div>
      </div>
    </div>
  );
}
