import React from "react";
import MailCard from "./MailCard";
import { Separator } from "@/components/ui/separator";
import { mailData } from "@/public/demoData/data";

export default function AllMailCardViewSection() {
  return (
    <div className=" overflow-scroll h-[87vh]">
      {mailData.map((mail, index) => (
        <div key={index}>
          <MailCard
            senderName={mail.senderName}
            senderImage={mail.senderImage}
            subject={mail.subject}
            toEmail={mail.toEmail}
            replyToEmail={mail.replyToEmail}
            message={mail.message}
            folderEmail={mail.folderEmail}
            timestamp={mail.timestamp}
            isStarred={mail.isStarted}
          />
          <Separator />
        </div>
      ))}
    </div>
  );
}
