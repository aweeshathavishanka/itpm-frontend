import React from "react";
import FAQs from "./FAQs1";
import FAQs2 from "./FAQs2";

export default function FAQSection() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col items-start gap-y-3">
          <p className=" px-2 py-0.5 text-sm text-indigo-500 rounded-full border border-indigo-500 bg-indigo-50">
            Frequently Asked Questions - FAQs
          </p>
          <h1 className=" text-5xl font-semibold text-start max-w-4xl">
            Got questions? We&apos;ve got answers!
          </h1>
          <p className=" text-gray-500">
            Here are some common queries about MailMind and how it helps you
            manage emails smarter.
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-10  pb-20  ">
          <FAQs />
          <FAQs2 />
        </div>
      </div>
    </div>
  );
}
