import Image from "next/image";
import React from "react";

interface ContactCardProps {
  name: string;
  email: string;
  imageUrl: string;
}

export default function ContactCard({
  name,
  email,
  imageUrl,
}: ContactCardProps) {
  return (
    <div className="">
      <div className="flex flex-wrap items-start gap-2">
        <Image
          src={imageUrl}
          alt={`${name}'s Profile Picture`}
          width={100}
          height={100}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-medium text-black">{name}</p>
          <p className="text-xs font-medium text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
}
