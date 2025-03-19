// import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

type MailViewCardProps = {
  id: string | number;
  sender: string;
  time: string;
  subject: string;
  message: string;
};

export default function MailViewCard({
  // id,
  sender,
  time,
  subject,
  message,
}: MailViewCardProps) {
  return (
    <div className="hover:bg-gray-100 bg-white m-2 rounded-sm border border-gray-200">
      {/* <Link href={`/dashboard/mail/${id}`} className=" hover:bg-white"> */}
      <Link href={`/dashboard/mail-chat`} className=" hover:bg-white">
        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-xs font-medium">{sender}</p>
            <p className="text-xs font-medium">{time}</p>
          </div>
          <div className="py-1">
            <h1 className="text-sm font-semibold text-indigo-700">{subject}</h1>
            <p className="text-xs font-normal line-clamp-2">{message}</p>
          </div>
          <div className=" flex items-center gap-2">
            <Badge variant="outline">meeting</Badge>
            <Badge variant="default">work</Badge>
            <Badge variant="outline">personal</Badge>
          </div>
        </div>

        {/* <Separator className="mt-1" /> */}
      </Link>
    </div>
  );
}
