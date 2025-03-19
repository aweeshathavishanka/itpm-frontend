import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function MailSectionNavBar() {
  return (
    <div>
      <div className=" flex items-center gap-10">
        <Button
          className="px-0  font-semibold active:text-indigo-500 hover:cursor-pointer hover:text-indigo-500"
          variant={"link"}>
          All
        </Button>
        <Button
          className="px-0 hover:cursor-pointer hover:text-indigo-500 font-semibold"
          variant={"link"}>
          Work
        </Button>
        <Button
          className="px-0 hover:cursor-pointer hover:text-indigo-500 font-semibold"
          variant={"link"}>
          Personal
        </Button>
        <Button
          className="px-0 hover:cursor-pointer hover:text-indigo-500 font-semibold"
          variant={"link"}>
          Offers
        </Button>
        <Button
          className="px-0 hover:cursor-pointer hover:text-indigo-500 font-semibold"
          variant={"link"}>
          Social
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className=" font-semibold hover:cursor-pointer hover:text-indigo-500 px-0">
              + Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className=" text-indigo-500">
                Add New Category
              </DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Category Name
                </Label>
                <Input id="name" defaultValue="Work" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Related Keywords
                </Label>
                <Input
                  id="username"
                  defaultValue="Work"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className=" bg-indigo-500">
                Add Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
