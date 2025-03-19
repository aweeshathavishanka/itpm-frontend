import { mailmindKeyFeatures } from "@/public/demoData/data";
import React from "react";

export default function KeyFeatures() {
  return (
    <div className=" relative md:py-32 py-10">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-indigo-200 opacity-20 blur-[80px]"></div>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col items-center gap-y-3">
          <p className=" px-2 py-0.5 text-sm text-indigo-500 rounded-full border border-indigo-500 bg-indigo-50">
            Key Features
          </p>
          <h1 className=" text-5xl font-semibold text-center max-w-4xl mx-auto">
            Revolutionize Your Inbox with <br /> MailMind&apos;s Intelligent
            Features
          </h1>
          <p className=" text-gray-500">
            AI-driven tools to help you manage, prioritize, and respond to
            emails in no time.
          </p>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mt-10">
            {mailmindKeyFeatures.map((feature) => (
              <div
                key={feature.id}
                className=" flex flex-col items-start gap-y-3 py-10">
                <div className=" flex items-center gap-3">
                  <p className=" text-3xl font-semibold">{feature.icon}</p>
                </div>
                <p className=" text-2xl font-semibold">{feature.title}</p>
                <p className=" text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
