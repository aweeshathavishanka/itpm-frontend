import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { ReminderDateTimePicker } from "./RemiderDatePicker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ReminderEdit() {
  return (
    <div>
      <div className=" flex flex-col gap-y-4 pt-3 ">
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="">Reminder Title</Label>
          <Input
            type="text"
            id="reminderTitle"
            placeholder="Enter Your Reminder Title"
          />
        </div>
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="">Date & Time Picker</Label>
          <ReminderDateTimePicker />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
        <Button>Edit Reminder</Button>
      </div>
    </div>
  );
}
