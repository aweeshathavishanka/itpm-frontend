"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CreateSummaryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    summary: "",
    keywords: "",
  });

  // Set today's date as the minimum value for the date input field
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setMinDate(formattedDate); // Set minDate
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newSummary = {
      ...formData,
      keywords: formData.keywords.split(",").map((kw) => kw.trim()), // Convert comma-separated keywords to array
    };

    const res = await fetch("/api/summaries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSummary),
    });

    if (res.ok) {
      router.push("/dashboard/summarizations"); // Redirect to home or summary list page
    }
  };

  return (
    <div className="max-w-2xl  p-10">
      <div className=" flex flex-col gap-y-2 mb-4">
        <h2 className="text-3xl font-bold mb-4">Create New Summary</h2>
        <p>Please fill out the form below to create a new summary.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg ">
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
            min={minDate} // Set minimum date to today
          />
        </div>

        <div>
          <label className="block font-medium">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required></textarea>
        </div>

        <div>
          <label className="block font-medium">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Keyword1, Keyword2, Keyword3"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Create Summary
        </Button>
      </form>
    </div>
  );
}
