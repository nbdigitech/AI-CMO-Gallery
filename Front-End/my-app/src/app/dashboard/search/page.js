"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCloudUploadAlt, FaDownload } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function ImageSearchPage() {
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [found, setFound] = useState(null); // Define found state

  useEffect(() => {
    const imageUrl = sessionStorage.getItem("uploadedImage");
    if (imageUrl) {
      setUploadedImage(imageUrl);

      // Simulating search logic with animation
      setTimeout(() => {
        const isMatch = Math.random() > 0.5; // 50% chance of finding a match
        setFound(isMatch);
      }, 3000); // Simulated 3-second delay
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {uploadedImage ? (
          found === null ? (
            //  Show loading animation while searching
            <div className="relative flex flex-col items-center">
              <div className="relative w-32 h-32">
                <img
                  src={uploadedImage}
                  alt="Searching..."
                  className="w-full h-full rounded-full border-4 border-gray-300 shadow-lg"
                />
                {/* Spinning Animation */}
                <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-lg text-gray-600">Searching Related Photo...</p>
            </div>
          ) : found ? (
            //  If match is found
            <div>  
              <p className="text-green-600"> Match Found!</p>
              <img
                src={uploadedImage}
                alt="Uploaded Preview"
                className="mt-4 w-full max-w-xs rounded-md shadow-md"
              />

              <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = uploadedImage;
                link.download = "matched-image.jpg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className=" mt-6 text-red-500 flex items-center gap-2 mx-auto"
            >
              <FaDownload size={24} /> 
            </button>
            </div>
          ) : (
            //  If no match found
            <p className="text-red-600">❌ No matching images found.</p>
          )
        ) : (
          <p className="mt-4 text-lg text-gray-600">No image uploaded.</p>
        )}

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => router.push("/dashboard/uploadphoto")}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Try Again
          </button>
        </div>

        {/* AI Image Search Text */}
        <p className="mt-6 text-xl font-semibold">
          The latest <span className="text-purple-700">AI</span> image search.
        </p>
      </main>
    </div>
  );
}
