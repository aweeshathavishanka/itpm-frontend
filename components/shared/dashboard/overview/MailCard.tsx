import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

interface MailCardProps {
  senderName: string;
  senderImage: string;
  subject: string;
  toEmail: string;
  replyToEmail: string;
  message: string;
  folderEmail: string;
  timestamp: string;
  isStarred: boolean;
}

export default function MailCard({
  senderName,
  senderImage,
  subject,
  toEmail,
  replyToEmail,
  message,
  folderEmail,
  timestamp,
  isStarred,
}: MailCardProps) {
  return (
    <div className="p-6 ">
      <Link href={"/dashboard/mail-chat"}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Image
              src={senderImage}
              alt={senderName}
              className="rounded-full object-cover w-10 h-10"
              width={100}
              height={100}
            />
            <div>
              <h1 className="font-semibold">{senderName}</h1>
              <p className="font-semibold text-indigo-500 pb-1.5">{subject}</p>
              <div className="flex flex-wrap items-center gap-1 text-xs font-semibold">
                <p>
                  To: <span className="font-medium">{toEmail}</span>
                </p>
                <p>
                  Reply-To: <span className="font-medium">{replyToEmail}</span>
                </p>
              </div>
              <div className="max-w-2xl pt-1.5">
                <p className="line-clamp-2 text-xs font-medium">{message}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 justify-end">
            <p className="flex items-center gap-2 text-xs font-medium">
              <FaRegFolderOpen /> - <span>{folderEmail}</span>
            </p>
            <p className="text-xs font-medium">{timestamp}</p>
            <p className="text-black cursor-pointer">
              {isStarred ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar />
              )}
            </p>
            <p className="text-black">
              <FaRegClock />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
