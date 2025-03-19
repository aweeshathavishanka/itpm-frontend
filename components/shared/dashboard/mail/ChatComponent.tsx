"use client";
import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
      sender: "agent",
    },
    {
      id: 2,
      text: "Hi, how can I help you today?",
      sender: "user",
    },
    {
      id: 3,
      text: "Sure! What time would work best for you? I want to ensure everyone is available.",
      sender: "user",
    },
    {
      id: 4,
      text: "I was thinking around 10 AM. Does that work for you?",
      sender: "agent",
    },
    {
      id: 5,
      text: "Yes, 10 AM works for me. Should we set up a virtual meeting or meet in person?",
      sender: "user",
    },
    {
      id: 6,
      text: "A virtual meeting would be best. I'll send over the meeting link shortly.",
      sender: "agent",
    },
    {
      id: 7,
      text: "Sounds good. I'll review the project details before then. Looking forward to it!",
      sender: "user",
    },
    {
      id: 8,
      text: "Great! Let me know if you need any specific documents or updates before the meeting.",
      sender: "agent",
    },
    {
      id: 9,
      text: "Thanks, I'll let you know if anything comes up. See you at 10 AM!",
      sender: "user",
    },
    {
      id: 10,
      text: "See you then!",
      sender: "agent",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: input, sender: "user" },
    ];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "What seems to be the problem?",
          sender: "agent",
        },
      ]);
    }, 1000);
  };

  return (
    <div className=" p-4  ">
      <div className=" ">
        <div className="h-[60vh] overflow-scroll space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-indigo-500 text-white self-end ml-auto text-sm font-medium"
                  : "bg-indigo-50 text-black text-sm font-medium"
              }`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center border-t pt-2">
          <Textarea
            className="flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />

          <Button className="mt-2 w-full" onClick={handleSend}>
            <Send size={16} /> Send Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
