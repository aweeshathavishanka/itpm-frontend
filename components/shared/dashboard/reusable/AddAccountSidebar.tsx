import { FaPlus } from "react-icons/fa";
import SidebarAccountView from "./SidebarAccountView";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const accounts = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "john.doe@example.com",
    size: 40,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "jane.smith@example.com",
    size: 50,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "alex.wilson@example.com",
    size: 45,
  },
];

export default function AddAccountSidebar() {
  return (
    <div className=" p-3 mt-3">
      <div className=" flex flex-col gap-y-6">
        <div className=" flex flex-col gap-y-6">
          {accounts.map((account, index) => (
            <SidebarAccountView key={index} {...account} />
          ))}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className=" w-8 h-8 bg-indigo-50 border border-indigo-300 rounded-full flex items-center justify-center text-indigo-600">
                <FaPlus size={10} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add Account</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
