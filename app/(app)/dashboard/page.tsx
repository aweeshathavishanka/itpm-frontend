import AllMailCardViewSection from "@/components/shared/dashboard/overview/AllMailCardViewSection";
import ContactList from "@/components/shared/dashboard/overview/ContactList";
import MailSection from "@/components/shared/dashboard/overview/MailSection";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { contactsCardSampleData } from "@/public/demoData/data";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="  grid grid-cols-4">
        <div className=" col-span-3 border-r">
          <div className=" p-6">
            <MailSection />
          </div>
          <Separator />
          <div>
            <div className="">
              <AllMailCardViewSection />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" flex items-center justify-center p-6">
            <Calendar />
          </div>
          <Separator />
          <div className=" p-6">
            <div className=" ">
              <h1 className=" font-semibold pb-3">Contact List</h1>
            </div>
            <div className=" flex flex-col gap-4 overflow-scroll h-[400px]">
              {contactsCardSampleData.map((contact) => (
                <ContactList
                  key={contact.name}
                  name={contact.name}
                  email={contact.email}
                  imageUrl={contact.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
