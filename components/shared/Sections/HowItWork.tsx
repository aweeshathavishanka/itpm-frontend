import { howItWorks } from "@/public/demoData/data";
import React from "react";

export default function HowItWork() {
  return (
    <div className=" relative md:py-32 py-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col items-start gap-y-3">
          <p className=" px-2 py-0.5 text-sm text-indigo-500 rounded-full border border-indigo-500 bg-indigo-50">
            How It Works
          </p>
          <h1 className=" text-5xl font-semibold text-start max-w-4xl">
            How MailMind Simplifies Your Email Management
          </h1>
          <p className=" text-gray-500">
            Follow these simple steps to experience smarter, AI-powered email
            handling.
          </p>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 mt-10">
            {howItWorks.map((feature) => (
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
