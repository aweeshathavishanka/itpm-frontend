"use client";
import { useState } from "react";
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
      router.push("/"); // Redirect to home or summary list page
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Create New Summary</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
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
