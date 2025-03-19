import { GroupSelection } from "@/components/shared/dashboard/reusable/GroupSelection";
import MailViewCard from "@/components/shared/dashboard/reusable/MailViewCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { sampleMailData } from "@/public/demoData/data";

export default function InboxSideBar() {
  return (
    <div>
      <div className="">
        <div className=" bg-white border-r">
          <div className=" sticky top-0 z-50 bg-white  p-4  ">
            <div>
              <div className=" flex items-center justify-between">
                <h1 className=" font-semibold">Inbox</h1>
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Unread</Label>
                </div>
              </div>
              <div className=" pt-4 flex items-center gap-1">
                <Input placeholder="Type to Search" className=" bg-white" />
                <div>
                  <GroupSelection />
                </div>
              </div>
            </div>
          </div>
          <Separator className=" my-3.5" />
          <div className="overflow-y-scroll h-[87vh] ">
            <div className="  ">
              {sampleMailData.map((mail) => (
                <MailViewCard
                  key={mail.id}
                  id={mail.id}
                  sender={mail.sender}
                  time={mail.time}
                  subject={mail.subject}
                  message={mail.message}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
