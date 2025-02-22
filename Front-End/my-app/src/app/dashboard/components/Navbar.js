"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-md w-full h-16 flex top-0 left-0 z-50 flex items-center px-6">
      <div className="flex items-center justify-between w-full px-4">
        {/* Left Section: Logo & Filter Button */}
        <div className="flex items-center gap-3">
          <img src="/CG logo.webp" alt="Logo" className="w-10 h-30" />
          <button
            className="border p-2 rounded-md text-sm bg-purple-700 text-white hover:bg-purple-800"
          >
            Filter
          </button>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center border rounded-md overflow-hidden w-[50%] bg-gray-200 px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm outline-none bg-transparent"
            />
            <button
              className="text-purple-500"
              onClick={() => router.push("/dashboard/uploadphoto")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Profile Icon */}
        <button className="w-17 h-10 rounded-full border border-gray-300 overflow-hidden">
          <img src="/pro.png" alt="User Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </nav>
  );
}
