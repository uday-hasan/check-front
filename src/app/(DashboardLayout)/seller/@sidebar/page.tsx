"use client";

import Link from "next/link";
import { Box, ShoppingCart, Package, LogOut } from "lucide-react";

const SellerSidebar = () => {
  return (
    <div>
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold">Seller Panel</h2>
        <p className="text-sm text-gray-500">Manage your store</p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link href="/seller/dashboard" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <Box /> Dashboard
        </Link>

        <Link href="/seller/my-medicines" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <Package /> Medicines
        </Link>

        <Link href="/seller/orders" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <ShoppingCart /> Orders
        </Link>

        <Link href="/" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <LogOut className="text-red-400"/> Back to Home
        </Link>
      </nav>
    </div>
  );
};

export default SellerSidebar;
