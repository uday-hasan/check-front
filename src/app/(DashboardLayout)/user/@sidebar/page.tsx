"use client";

import Link from "next/link";
import { Box, ShoppingCart, Package, Users, LogOut, UserRoundPen } from "lucide-react";

const SellerSidebar = () => {
  return (
    <div>
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold">User Panel</h2>
        <p className="text-sm text-gray-500">Manage your orders</p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link href="/user/dashboard" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <Box /> Dashboard
        </Link>

        <Link href="/user/profile" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <UserRoundPen /> Profile
        </Link>

        <Link href="/user/cart" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <ShoppingCart /> Cart
        </Link>

        <Link href="/user/orders" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <Package />My Orders
        </Link>

        <Link href="/" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <LogOut className="text-red-400"/> Back to Home
        </Link>
      </nav>
    </div>
  );
};

export default SellerSidebar;
