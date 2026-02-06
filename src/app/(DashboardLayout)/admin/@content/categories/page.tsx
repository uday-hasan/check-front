"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Category {
  id: string;
  name: string;
}

const AdminCategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");

  const loadCategories = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { credentials: "include" }
      );

      if (!res.ok) throw new Error();

      const data = await res.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch {
      toast.error("Failed to load categories");
      setCategories([]);
    }
  };

  const addCategory = async () => {
    if (!name.trim()) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name }),
      }
    );

    if (!res.ok) return toast.error("Failed to add category");

    toast.success("Category added");
    setName("");
    loadCategories();
  };

  useEffect(() => {
    (async () => {
      await loadCategories();
    })();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Categories</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex gap-3">
          <input
            className="input input-bordered w-full"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addCategory}>
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="p-3 bg-gray-50 rounded flex justify-between"
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
