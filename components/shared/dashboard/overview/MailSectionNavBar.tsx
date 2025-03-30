"use client";
import { useEffect, useState } from "react";
import CategoryButton from "@/components/pages/Categories/CategoryButton";
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

export default function MailSectionNavBar() {
  const [categories, setCategories] = useState<{ id: number; label: string }[]>(
    []
  );
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Handle adding a new category
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: newCategory }),
      });

      if (res.ok) {
        setNewCategory("");
        setIsDialogOpen(false);
        fetchCategories(); // Refresh categories
      } else {
        console.error("Failed to add category");
      }
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            variant="outline"
            label={category.label}
          />
        ))}
      </div>

      {/* Dialog for Adding Category */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="link"
            className="font-medium hover:cursor-pointer text-sm px-3 rounded-2xl border hover:text-indigo-500 py-2">
            + Add Category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-indigo-500">
              Add New Category
            </DialogTitle>
            <DialogDescription>
              Enter a category name and click Add.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Category Name
              </Label>
              <Input
                id="name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              className="bg-indigo-500"
              onClick={handleAddCategory}>
              Add Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
