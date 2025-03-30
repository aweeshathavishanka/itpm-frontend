import SummarySection from "@/components/pages/summarizations/SummarySection";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" p-10 bg-gray-50">
        <div>
          <h1 className="text-4xl font-semibold text-start">
            Summarizations 📜
          </h1>
          <p className="text-start text-gray-600 pt-3">
            Summarize your documents with ease using our advanced summarization
            tool.
          </p>
        </div>
        <div>
          <SummarySection />
        </div>
      </div>
    </div>
  );
}
