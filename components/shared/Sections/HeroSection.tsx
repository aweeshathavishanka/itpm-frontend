import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import heroImg from "@/public/hero.png";

export default function HeroSection() {
  return (
    <div className=" py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-300 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col items-center gap-y-6">
          <p className=" px-3 py-1 border rounded-full text-sm font-semibold text-indigo-500 border-indigo-300 bg-indigo-50">
            Master Your Inbox with AI-Powered Email Management
          </p>
          <h1 className=" text-6xl font-semibold text-center max-w-4xl mx-auto">
            Prioritize, Summarize & Respond to Emails Effortlessly
          </h1>
          <p className=" text-sm font-medium text-center  max-w-2xl text-gray-500 mx-auto">
            Tired of email overload? MailMind uses AI-powered categorization,
            smart summaries, and urgency detection to keep your inbox organized.
            Stay on top of important messages, reduce clutter, and respond
            faster with intelligent automation.
          </p>
          <Button>Get Started for Free</Button>
        </div>
        <div className=" flex flex-col items-center pt-10">
          <Image
            src={heroImg}
            alt="MailMind Logo"
            width={1000}
            height={1000}
            className=" rounded-lg border p-2 border-indigo-300"
          />
        </div>
      </div>
    </div>
  );
}
