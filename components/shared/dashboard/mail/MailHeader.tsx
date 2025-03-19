import Image from "next/image";
import React from "react";

export default function MailHeader() {
  return (
    <div className=" p-6">
      <div className=" flex itsms-center gap-4">
        <Image
          src={
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Profile Picture"
          width={100}
          height={100}
          className=" rounded-full object-cover w-10 h-10"
        />
        <div>
          <h1 className=" font-semibold">Aweesha Thavishanka</h1>
          <p className=" text-sm font-medium">Meeting Tomorrow</p>
          <p className=" text-sm font-medium">
            Reply - to : <span className=" font-medium">hello@awee.me</span>
          </p>
        </div>
      </div>
    </div>
  );
}
