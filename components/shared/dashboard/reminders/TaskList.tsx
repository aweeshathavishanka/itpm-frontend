"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, MoreVerticalIcon } from "lucide-react";
import ReminderEdit from "./ReminderEdit";
import ReminderCreate from "./ReminderCreate";

const tasks = [
  {
    id: "REM-7839",
    tag: "Bug",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
  },
  {
    id: "REM-7184",
    tag: "Feature",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "REM-1780",
    tag: "Documentation",
    title: "The CSS feed is down, index the bluetooth transmitter...",
    status: "Todo",
    priority: "High",
  },
  {
    id: "REM-6938",
    tag: "Documentation",
    title: "Use the redundant SCSI application...",
    status: "Todo",
    priority: "High",
  },
  {
    id: "REM-9285",
    tag: "Bug",
    title: "The IP monitor is down, copy the haptic alarm...",
    status: "Todo",
    priority: "High",
  },
];

export default function TaskList() {
  const [filter, setFilter] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Welcome back!</h2>
      <p className="text-sm text-gray-500">
        Here&apos;s a list of your tasks for this month!
      </p>

      <div className="flex justify-between items-center mt-4">
        <Input
          placeholder="Filter tasks..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-1/3"
        />
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" border border-dashed">
                Status <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Todo</DropdownMenuItem>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" border border-dashed">
                Priority <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>High</DropdownMenuItem>
              <DropdownMenuItem>Medium</DropdownMenuItem>
              <DropdownMenuItem>Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Dialog>
              <DialogTrigger className=" text-sm font-medium rounded-lg bg-indigo-500 text-white px-3">
                + Add Reminder
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Your Reminder</DialogTitle>
                  <DialogDescription asChild>
                    <ReminderCreate />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Button>
        </div>
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">No</TableHead>
            <TableHead>Reminder</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{task.tag}</Badge> {task.title}
                </TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
                  {task.priority === "High" ? "⬆ High" : "⬇ Low"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Dialog>
                          <DialogTrigger className=" text-sm pl-2">
                            Edit
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Your Reminder</DialogTitle>
                              <DialogDescription asChild>
                                <ReminderEdit />
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
