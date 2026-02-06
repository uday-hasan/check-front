"use client";

import Link from "next/link";
import { Box, ShoppingCart, Package, Users, LogOut, User } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div>
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <p className="text-sm text-gray-500">Manage your Website</p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          href="/admin/dashboard"
          className="flex gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <Box /> Dashboard
        </Link>

        <Link
          href="/admin/all-users"
          className="flex gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <Users /> All Users
        </Link>

        <Link
          href="/admin/orders"
          className="flex gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <ShoppingCart /> All Orders
        </Link>

        <Link
          href="/admin/categories"
          className="flex gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <Package /> Categories
        </Link>

        <Link href="/" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <LogOut className="text-red-400" /> Back to Home
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
