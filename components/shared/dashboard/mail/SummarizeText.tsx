import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaSave } from "react-icons/fa";
import { VscSaveAll } from "react-icons/vsc";

export default function SummarizeText() {
  return (
    <div>
      <div className=" p-6">
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your message here."
            className=" h-60 font-medium "
          />
          <div className=" flex items-center gap-2 w-full">
            <Button className=" w-1/2 bg-indigo-200 text-indigo-500 hover:text-white hover:cursor-pointer">
              {" "}
              <FaSave />
              Save to Bucket
            </Button>
            <Button className=" w-1/2 bg-indigo-200 text-indigo-500 hover:text-white hover:cursor-pointer">
              {" "}
              <VscSaveAll />
              All Summarize List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
