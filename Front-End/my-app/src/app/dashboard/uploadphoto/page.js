"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCloudUploadAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";  

export default function UploadPhotoPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventCategory, setEventCategory] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleProceed = () => {
    if (!eventCategory || !eventDate || !selectedFile) {
      alert("Please select an event, date, and upload an image before proceeding.");
      return;
    }

    //  Store values in sessionStorage
    sessionStorage.setItem("eventCategory", eventCategory);
    sessionStorage.setItem("eventDate", eventDate);

    //  Convert image to Base64 & store it
    const reader = new FileReader();
    reader.onload = () => {
      sessionStorage.setItem("uploadedImage", reader.result);
      router.push("/dashboard/search"); //  Navigate to Search Page
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="mt-16 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-xl font-bold mb-4 text-center">Upload Your Photo</h2>

          {/* Select Event Category */}
          <select
            className="border p-2 w-full mb-2 rounded-md"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
          >
            <option value="">Select Event Category</option>
            <option value="rajutsav2024">Rajutsav2024 New Raipur</option>
            <option value="bastar_olympics">Bastar Olympics 2024</option>
            <option value="cm_jan_darshan">CM Jan Darshan 2024</option>
            <option value="mahtari_vandana">Mahtari Vandana Yojana</option>
            <option value="mor_awas">Mor Awas Mor Adhikar</option>
          </select>

          {/* Select Date */}
          <input
            type="date"
            className="border p-2 w-full mb-2 rounded-md"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />

          {/* Drag & Drop File Upload */}
          <label className="border-2 border-dashed p-6 w-full flex flex-col items-center justify-center rounded-md cursor-pointer bg-purple-50">
            <FaCloudUploadAlt size={40} className="text-gray-500" />
            <span className="mt-2 text-gray-500">Drag & Drop or Click to Upload</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          {selectedFile && (
            <p className="mt-2 text-sm text-green-600">Selected File: {selectedFile.name}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed} //  Navigate to Search Page
              className="px-4 py-2 bg-purple-900 text-white rounded-md"
            >
              Proceed
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
