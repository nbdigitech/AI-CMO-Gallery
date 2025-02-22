
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaDownload,
  FaShare,
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlay,
  FaApple,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUpload,
  FaLink,
} from "react-icons/fa";
import { FiShare , FiDownload , FiLink , } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa"

const images = [
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" }
];


export default function Dashboard() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-[rgba(240,240,240,1)]-100">
     <nav className="w- full h-[80px] bg-white shadow-md shadow-[rgba(240,240,240,1)] px -6 py-3 flex items-center justify-between">
              <div className="flex items-center justify-between w-full px-4">
                {/* Left Section: Logo & Filter Button */}
                <div className="flex items-center gap-6">
                  {/* CG Logo (Properly Positioned) */}
                  <img
                    src="CG logo.webp"
                    alt="Logo"
                    className="w-[71px] h-[71px] ml-[10px]" // Adjusted left margin so it doesn't overlap
                  />
                  {/* Search Bar & Filter Button */}
                  <div className="flex items-center border border-[rgba(240,240,240,1)] rounded-full overflow-hidden bg-[rgba(236,236,236,1)] w-[1214px] h-[45px] px-3">
                    {/* Filter Button */}  
                    <button
                      onClick={() => setShowFilter(true)}
                      className="px-4 py-2 rounded-full font-[Inter] font-medium text-[14px] leading-[16.8px] tracking-[0%]  text-[rgba(104,104,104,1)]  flex items-center gap-2"
                    >
                      Filter
                      <div className="w-[12px] h-[12px]  border-[rgba(104,104,104,1)]">
                      <FaChevronDown className="text-[rgba(104,104,104,1)] text-sm" />
                      </div>
                    </button>
                    {/* Separator Line (|) */}
                    <span className="text-gray-400 px-3 text-lg">|</span>
                    {/* Search Input */}
                    <input
                      type=" text-[rgba(104,104,104,1)]"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full text-sm outline-none bg-transparent px-3"
                    />
                    <button> ✕  </button>
                    <span className="text-gray-400 px-3 text-lg">|</span>
                {/* Search Icon Button */}
                <button className="text-background: var(--P-Color-2, rgba(104, 104, 104, 1));" >
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
          </div>
          <button
                className="w-[150px] h-[40px] bg-[rgba(23,6,69,1)] text-[rgba(255,225,0,1)] rounded-[20px] shadow-[0px_4px_36px_0px_rgba(23,6,69,0.5)] 
                flex items-center justify-center px-2 py-2 gap-2 transition-all ml-[20px] mr-6"
                onClick={() => router.push("/dashboard/uploadphoto")} // Adjust navigation as needed
              >
                Search
          </button>
                {/* Right Section: Profile Icon */}
                <button className="w-12 h-15 rounded-full border border-gray-300 overflow-hidden ">
                  <img src="/pro.png" alt="User Profile" className="w-full h-full object-cover" />
          </button>
        </nav>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
        {images
          .filter((img) => img.title.toLowerCase().includes(search.toLowerCase()))
          .map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg ">
              <img src={image.src} alt={image.title} className="w-full h-70 rounded-md" />
              <h3 className=" text-[20px] font-bold tracking-[0.0em] capitalize text-black mt-4">{image.title}</h3>

              <div className="flex gap-[15px] items-center mt-5">
                {/* Share Button */}
                <button
                className="w-[30px] h-[30px] border border: 1px solid var(--P-Color-2, rgba(104, 104, 104, 1)) flex items-center justify-center rounded-full"
              >
                <FiShare size={18} className="text-rgba(104, 104, 104, 1)-500" />
              </button>
                {/* Copy Link Button */}
              <button
                  className="w-[30px] h-[30px] border border: 1px solid var(--P-Color-2, rgba(104, 104, 104, 1)) flex items-center justify-center rounded-full"
                >
                  <FiLink size={18} className="text-rgba(104, 104, 104, 1)-500" />
                </button>
              {/* Download Button */}
              <button
                className="w-[30px] h-[30px] border border: 1px solid var(--P-Color-2, rgba(104, 104, 104, 1)) flex items-center justify-center rounded-full"
              >
                <FiDownload size={18} className="text-rgba(104, 104, 104, 1)-600" />
              </button>
              </div>
            </div>
          ))}
      </div>
      {showFilter && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-full lg:w-[90%] xl:w-[80%] max-h-[90vh] overflow-y-auto">
                    {/* Close Button */}
                    <div className="flex justify-start mb-4">
                      <button
                        onClick={() => setShowFilter(false)}
                        className="text-xl text-gray-500"
                      >
                        ✖
                      </button>
                    </div>

                    {/* Event Section */}
                    <div>
                      <p className="text-lg font-semibold mb-2">Event</p>
                      <div className="grid grid-cols-5 gap-3">
                        {[
                          "Azadi Ka Amrit Mahotsav",
                          "Rajim Kumbh Mela",
                          "Rajutsav 2025",
                          "Harihar Chhattisgarh",
                          "Mahatari Vandan Yojna",
                          "Chhattisgarh Yojna",
                        ].map((event, index) => (
                          <label
                            key={index}
                            className="flex items-center gap-2 bg-gray-100 p-2 rounded-md border border-gray-300 hover:border-purple-500 cursor-pointer"
                          >
                            <input type="checkbox" className="w-4 h-4" />
                            {event}
                          </label>
                        ))}
                      </div>
                      <div className="border-b border-gray-300 my-4"></div>
                    </div>

                    {/* Category Section */}
                    <div className="mt-2">
                      <p className="text-lg font-semibold mb-2">Category</p>
                      <div className="grid grid-cols-5 gap-3">
                        {[
                          "Azadi Ka Amrit Mahotsav",
                          "Rajim Kumbh Mela",
                          "Rajutsav 2025",
                          "Harihar Chhattisgarh",
                          "Mahatari Vandan Yojna",
                          "Chhattisgarh Yojna",
                          "Ujjwala Yojna",
                        ].map((category, index) => (
                          <label
                            key={index}
                            className="flex items-center gap-2 bg-gray-100 p-2 rounded-md border border-gray-300 hover:border-purple-500 cursor-pointer"
                          >
                            <input type="checkbox" className="w-4 h-4" />
                            {category}
                          </label>
                        ))}
                      </div>
                      <div className="border-b border-gray-300 my-4"></div>
                    </div>

                    {/* District Section */}
                    <div className="mt-2">
                      <p className="text-lg font-semibold mb-2">Districts</p>
                      <div className="grid grid-cols-5 gap-3">
                        {[
                          "Balod",
                          "Sukma",
                          "Dantewada",
                          "Bastar",
                          "Kondagaon",
                          "Narayanpur",
                          "Kanker",
                          "Kawardha",
                          "Baloda Bazar",
                          "Balrampur",
                          "Bemetara",
                          "Bijapur",
                          "Bilaspur",
                          "Dhamtari",
                          "Durg",
                          "Gariaband",
                          "Gaurela-Pendra-Marwahi",
                          "Janjgir-Champa",
                          "Jashpur",
                          "Korba",
                          "Koriya",
                          "Mahasamund",
                          "Mungeli",
                          "Raigarh",
                          "Raipur",
                          "Rajnandgaon",
                          "Surajpur",
                          "Surguja",
                        ].map((district, index) => (
                          <label
                            key={index}
                            className="flex items-center gap-2 bg-gray-100 p-2 rounded-md border border-gray-300 hover:border-purple-500 cursor-pointer"
                          >
                            <input type="checkbox" className="w-4 h-4" />
                            {district}
                          </label>
                        ))}
                      </div>
                      <div className="border-b border-gray-300 my-4"></div>
                    </div>

                    {/* Date Range Section */}
                    <div className="mt-4">
                      <p className="text-lg font-semibold mb-2">Date</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium">Date From</label>
                          <input
                            type="date"
                            className="border p-2 w-full rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Date To</label>
                          <input
                            type="date"
                            className="border p-2 w-full rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Clear All Button */}
                    <div className="flex justify-start mt-4">
                      <button
                        onClick={() => {
                          document
                            .querySelectorAll('input[type="checkbox"]')
                            .forEach((checkbox) => (checkbox.checked = false));
                          document
                            .querySelectorAll('input[type="date"]')
                            .forEach((input) => (input.value = ""));
                        }}
                        className="px-4 py-2 bg-gray-200 rounded-md"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
      )}
      <footer className="bg-gray-300 bg-rgba(236, 236, 236, 1)   text-black text-center py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Districts</h3>
              <ul className="text-sm text-gray-600 grid grid-cols-2 gap-1">
                <li>Bijapur</li>
                <li>Sukma</li>
                <li>Dantewada</li>
                <li>Bastar</li>
                <li>Kondagaon</li>
                <li>Narayanpur</li>
                <li>Kanker</li>
                <li>Kawardha</li>
                <li>Rajnandgaon</li>
                <li>Durg</li>
                <li>Bemetara</li>
                <li>Dhamtari</li>
                <li>Gariaband</li>
                <li>Raipur</li>
                <li>Baloda Bazar</li>
                <li>Mahasamund</li>
                <li>Bilaspur</li>
                <li>Mungeli</li>
                <li>Korba</li>
                <li>Janjgir-Champa</li>
                <li>Raigarh</li>
                <li>Korea</li>
                <li>Surajpur</li>
                <li>Surguja</li>
                <li>Balrampur</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Features</h3>
              <ul className="text-sm text-gray-600">
                <li>Home</li>
                <li>Copyright Policy</li>
                <li>Disclaimer</li>
                <li>Site Map</li>
                <li>Hyperlink Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Reach Us</h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaPhone /> <span>+91-771-2221614</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaEnvelope /> <span>dprcgh@gmail.com</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt /> Directorate of Public Relations, Naya Raipur, Chhattisgarh, 492001
              </p>
            </div>
            <div>
            <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Download Our App</h3>
                  <div className="flex gap-4 mt-2">
                    <button className="flex items-center gap-2 border px-4 py-2 rounded-md shadow hover:bg-gray-100">
                      <FaGooglePlay className="text-green-600" /> Play Store
                    </button>
                    <button className="flex items-center gap-2 border px-4 py-2 rounded-md shadow hover:bg-gray-100">
                      <FaApple className="text-black" /> App Store
                    </button>
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <img src="CG logo.webp" alt="Logo 1" className="w-14 h-14" />
                    <img src="/pic 2.png" alt="Logo 2" className="w-14 h-14" />
                    <img src="/pic 3.png" alt="Logo 3" className="w-14 h-14" />
                    <img src="/pic 4.png" alt="Logo 4" className="w-14 h-14" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2">Follow Us</h3>
          <a href="#" className="text-blue-600"><FaFacebookF size={20} /></a>
          <a href="#" className="text-pink-500"><FaInstagram size={20} /></a>
          <a href="#" className="text-red-600"><FaYoutube size={20} /></a>
          <a href="#" className="text-blue-500"><FaLinkedinIn size={20} /></a>
          <a href="#" className="text-gray-700"><FaTwitter  size={20} /></a>
        </div>

        <p className="mt-6 text-sm text-gray-500 text-center">
          © 2025 CMO Gallery | Initiative by DPR Chhattisgarh
        </p>

      </footer>
    </div>
  );
}
