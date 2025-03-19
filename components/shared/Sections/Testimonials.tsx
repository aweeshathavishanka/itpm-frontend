import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    name: "John Doe",
    designation: "Product Manager",
    company: "Tech Innovations Inc.",
    testimonials:
      "MailMind has completely transformed how we handle emails. The smart categorization and prioritization save us so much time every day.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    name: "Jane Smith",
    designation: "Marketing Director",
    company: "Creative Solutions Ltd.",
    testimonials:
      "The AI-powered email summaries are a game changer. I can quickly scan emails without reading everything, boosting my productivity.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    name: "Sarah Lee",
    designation: "Senior Researcher",
    company: "Research Labs",
    testimonials:
      "As a researcher, managing email invites and academic communications has never been easier. MailMind’s urgency detection is excellent.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww", // Replace with actual image URL
    name: "Michael Brown",
    designation: "CEO",
    company: "Business Strategies Co.",
    testimonials:
      "MailMind’s seamless integration with Outlook and smart auto-responses have drastically improved our teams email workflow.",
  },
];

export default function Testimonials() {
  return (
    <div className=" md:py-32 py-10">
      <div className=" max-w-7xl mx-auto">
        <div className=" flex flex-col items-center gap-y-3">
          <p className=" px-2 py-0.5 text-sm text-indigo-500 rounded-full border border-indigo-500 bg-indigo-50">
            Testimonials
          </p>
          <h1 className=" text-5xl font-semibold text-center max-w-4xl mx-auto">
            What Our Users Are Saying
          </h1>
          <p className=" text-gray-500">
            Real feedback from professionals who&apos;ve streamlined their email
            management with MailMind.
          </p>
        </div>
        <div className=" py-10">
          <Carousel className="">
            <CarouselPrevious />
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-1/3 border p-10 m-4 rounded-2xl">
                  <div>
                    <p className=" font-medium pb-3">
                      {testimonial.testimonials}
                    </p>
                    <div className=" flex items-center gap-2 pb-3">
                      <FaStar className=" text-yellow-300" />
                      <FaStar className=" text-yellow-300" />
                      <FaStar className=" text-yellow-300" />
                      <FaStar className=" text-yellow-300" />
                      <FaStar className=" text-yellow-300" />
                    </div>
                  </div>
                  <div className=" flex items-center gap-2">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className=" rounded-full w-10 h-10 object-cover"
                    />
                    <div>
                      <p className=" text-sm font-semibold">
                        {testimonial.name}
                      </p>
                      <p className=" text-xs font-medium">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
