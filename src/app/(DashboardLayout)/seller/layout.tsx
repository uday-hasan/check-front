"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

interface SellerLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export default function SellerLayout({ sidebar, content }: SellerLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile header with toggle button */}
      <header className="bg-white shadow-sm md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-blue-600">Seller Panel</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop sidebar  */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
            transition-transform duration-300 ease-in-out
            md:relative md:translate-x-0
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close button – only on mobile */}
          <div className="md:hidden flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Close menu"
            >
              <span className="text-xl font-bold">×</span>
            </button>
          </div>

          {sidebar}
        </aside>

        {/* Overlay sidebar  */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            {content}
          </div>
        </main>
      </div>
    </div>
  );
}