
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Download, Upload, Link } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentTab, setCurrentTab] = useState("All Photos");
  const [selectedImages, setSelectedImages] = useState([]);
  
  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const data = [
    { day: "1", users: 20 },
    { day: "2", users: 35 },
    { day: "3", users: 50 },
    { day: "4", users: 80 },
    { day: "5", users: 45 },
    { day: "6", users: 10 },
    { day: "7", users: 95 },
  ];

  const eventNames = ["Rajyotsava", "Mahtarivandan Yojna", "Mor Awas Mor Adhikar"];
  

  const handleSelectAll = () => {
    if (selectedImages.length === eventNames.length) {
      setSelectedImages([]); // Deselect all
    } else {
      setSelectedImages(eventNames.map((_, i) => i)); // Select all
    }
  };

  const handleDownload = () => {
    if (selectedImages.length === 0) {
      alert("No images selected for download.");
      return;
    }
    alert(`Downloading ${selectedImages.length} images.`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full h-16 flex items-center px-6">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center gap-3">
            <img src="/img_1.png" alt="Logo" className="w-10 h-10" />
            <button className="border p-2 rounded-md text-sm bg-purple-700 text-white hover:bg-purple-800">
              Filter
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center border rounded-md overflow-hidden w-[50%] bg-gray-200 px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-sm outline-none bg-transparent"
              />
              <button className="text-purple-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          <button
            className="border p-2 rounded-md text-sm bg-purple-700 text-white hover:bg-purple-800"
            onClick={() => {
              localStorage.removeItem("isAdmin");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden">
            <img src="/pro.png" alt="User Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-12 flex justify-between items-center rounded-b-[100px]">
        <div>
          <h1 className="text-5xl font-bold">Welcome To CMO Gallery</h1>
          <p className="text-lg mt-2 mb-4">Here's Everything You Need To Know To Get Started.</p>
          <p className="text-xl font-semibold mt-6">Rajyotsava 2024 New Raipur</p>
        </div>
        <img src="/CM.png" alt="admin" className="w-24 h-40 drop-shadow-lg transition-transform duration-300 hover:scale-105" />
      </div>

      {/* Overview & Graph Section */}
      <div className="p-6 flex gap-6">
        <div className="w-[30%] bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Total Users", count: "149", bg: "bg-purple-200" },
              { label: "Total Downloads", count: "378", bg: "bg-green-200" },
              { label: "Total Images", count: "72", bg: "bg-blue-200" },
              { label: "Total Events", count: "25", bg: "bg-yellow-200" },
            ].map((item, index) => (
              <div key={index} className={`p-4 ${item.bg} rounded-lg text-center shadow-md`}>
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="text-3xl font-bold">{item.count}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[70%] bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Users Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#6b46c1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Tabs & Gallery */}
      <div className="p-6">
        <div className="flex space-x-6 border-b pb-2">
          {["All Photos", "All Users", "Profile Update"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${currentTab === tab ? "border-b-2 border-purple-900 font-bold" : ""}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </button>
           ))}
           <div className="flex items-center gap-4 justify-end p-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="selectAll" className="w-4 h-4 cursor-pointer" onChange={handleSelectAll} />
            <label htmlFor="selectAll" className="text-sm font-semibold cursor-pointer">Select All</label>
          </div>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md" onClick={handleDownload}>
            Download
          </button>
        </div>
        </div>
        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-6 mt-4">
          <div className="p-4 flex flex-col items-center bg-gray-200 rounded-lg">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-lg">+ Create Folder</button>
            <p className="text-gray-500 mt-2">Example: New Folder</p>
          </div>
          {eventNames.map((event, i) => (
            <div key={i} className="p-4 bg-white shadow rounded-lg">
              <img src="/F4.png" alt="Gallery Item" className="rounded-lg w-80 h-100 object-cover" />
              <p className="text-center mt-2">{event}</p>
              <div className="flex justify-around mt-3 w-full px-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                  <Upload size={18} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700">
                  <Link size={18} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
                <Download size={18} />
            </button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
