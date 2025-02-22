"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const images = ["/cg.png", "/imgB.png"];
  const [currentImage, setCurrentImage] = useState(0);
  const [page, setPage] = useState("login");
  const [showPopup, setShowPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const correctOtp = ["1", "2", "3", "4", "5"];
  const otpRefs = useRef([]);

  // States for registration & profile update
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Raipur");

  const chhattisgarhCities = [
    "Raipur", "Bilaspur", "Durg", "Jagdalpur", "Korba", "Ambikapur", "Rajnandgaon",
    "Raigarh", "Dhamtari", "Mahasamund", "Kanker", "Jashpur", "Balod", "Bemetara",
    "Baloda Bazar", "Kawardha", "Mungeli", "Sukma", "Bijapur", "Narayanpur", "Kondagaon",
    "Dantewada", "Gariaband"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1]?.focus();
      } else if (!value && index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleProfileUpdate = () => {
    if (name && email) {
      alert("Profile updated!");
      router.push("/dashboard");
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleSignUp = () => {
    setShowPopup(true); // Show success popup
  };

  const handleOtpVerification = () => {
    if (JSON.stringify(otp) === JSON.stringify(correctOtp)) {
      setPage("profile");
    } else {
      setErrorMessage("Invalid OTP. Please try again."); // Show error message for wrong OTP
    }
  };
  const handleAdminLogin = () => {
    // Sample credentials (Replace with actual backend validation)
    const adminUsername = "admin";
    const adminPassword = "password123";

    if (fullName === adminUsername && password === adminPassword) {
      sessionStorage.setItem("isAdmin", "true"); // Store admin session
      router.push("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };
  return (
    <div className="  fixed inset-0  flex flex-col md:flex-row w-full h-screen items-center justify-center bg-[#ECECEC] p-10">
      <div className="relative flex flex-col items-center justify-start full-h-screen pt-[41px] "></div>
      <img src="/CG logo.webp" alt="Logo" className="w-[119px] h-[119px] absolute top-[41px] left-1/4 transform -translate-x-1/4" />
      <div className=" absolute fixed top w-[516px] h-[526px] 
             top-[180px] left-[150px] 
             radius-[16px] p-[48px] 
             pr-[40px] pb-[56px] pl-[40px] 
             gap-[24px] bg-white shadow-lg rounded-[30px]">
        {page === "login" ? (
          <>
            <h2 className="text-[32px] font-[Poppins] font-bold leading-[38.4px] tracking-[-0.8px] text-center text-[#170645] ">AI Based CMO Gallery</h2>
            <p className="text-[16px] font-[Poppins] font-normal leading-[25.6px] tracking-[0px] text-center text-[#170645]">One Click Download</p>
            <button className="flex items-center justify-center w-full border p-2 mt-4 rounded-full text-background: rgba(23, 6, 69, 1);-600 hover:bg-gray-200">
              <img src="/google%20pic.png" alt="Google" className="w-5 mr-2" />
              Sign In With Google
            </button>
            <div className="flex items-center my-6"><hr className="flex-grow border-t border-gray-300" /><span className="px-3 text-gray-500 text-center ">Or, Sign In With Phone No.</span><hr className="flex-grow border-t border-gray-300" /></div>
            <input
              type="text-[#170645] ;"
              placeholder="Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border w-full p-2 rounded-full mb-9  bg-white text-[#170645] placeholder- white"
            />
            <button onClick={() => setPage("verification")} className="w-full bg-[#170645]  text-[#FFE100] p-2 rounded-full">
              Sign - In
            </button>
            <button onClick={() => setPage("admin")} className="w-full bg-[#170645]  text-[#FFE100] p-2 rounded-full mt-4">
              Admin Login -  In
            </button>
            <div className="text-center text-sm dark-black-600 mt-2">
              Not registered yet?{" "}
              <span className="text-rgb(9, 1, 31) cursor-pointer" onClick={() => setPage("register")}>
                Register Now
              </span>
              <div className="flex justify-center gap-4  w-full mt-4">
                <button className="text-[#170645] hover:underline">Customer Support</button>
                <button className="text-[#170645]hover:underline">Terms of Service</button>
            </div>
            </div>
            <div className="w-[204px] h-[30px] absolute top-[530px] left-[150px] bg-white-500 text-center text-black text-[14px] font-medium leading-[22.4px] tracking-[0px] font-inter whitespace-nowrap flex items-center justify-center mt-auto">
              Initiative By DPR Chhattisgarh
            </div>
          </>
          ) : page === "admin" ? (
            <>
            <p className="text-xl font-bold text-center text-blue-900">AI Based CMO Gallery</p>
              <h2 className="text-xl font-bold text-center text-blue-800 mt-4">Admin Login</h2>
              <div className="mt-4">
                <label className="block font-medium">Username</label>
                <input type="text" value ={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border rounded mt-1" placeholder="Enter Username" />
              </div>
              <div className="mt-3">
                <label className="block font-medium">Password</label>
                <input type="password" value ={password}  onChange={(e) => setPassword(e.target.value)}  className="w-full p-2 border rounded mt-1" placeholder="Enter Password" />
              </div>
              <div className="mt-2 text-left text-sm">
                   <a href="/forgot-password" className="text-black-600 hover:underline">Forgot Password?</a>
                </div>
              <button onClick={handleAdminLogin} className= "w-full mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign In</button>
            </>
        ) : page === "register" ? (
          <>
            <p className="text-xl font-bold text-center text-blue-900">AI Based CMO Gallery</p>
            <h2 className="text-xl font-bold text-center text-blue-900">Register</h2>

            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border w-full p-2 rounded-md mb-4" />
            <input type="text" placeholder="Mobile No." value={mobile} onChange={(e) => setMobile(e.target.value)} className="border w-full p-2 rounded-md mb-4" />
            <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2 rounded-md mb-4" />
            <input type="password" placeholder="Create Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2 rounded-md mb-4" />

                  <button
                      onClick={() => {
                      setShowPopup(true); // Show success popup
                    }}
                      className="w-full bg-blue-900 text-white p-2 rounded-md"
                    >
                      Sign Up
                  </button>

                {/* Success Popup */}
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-center text-blue-900">Registration Successful!</h2>
                    <button
                       onClick={() => {
                        setShowPopup(false); // Close popup
                        setPage("login"); // Redirect to login page
                      }}
                      className="mt-4 w-full bg-green-500 text-white p-2 rounded-md"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
          </>
        ) : page === "verification" ? (
          <>
            <h2 className="text-[32px] font-[Poppins] font-bold leading-[38.4px] tracking-[-0.8px] text-center text-[#170645]">Verification Code</h2>
            <p className="text-[20px] font-[Poppins] font-normal leading-[25.6px] tracking-[0px] text-center text-[#170645] p-2 rounded-md">We have sent a verification code to your {mobile}</p>
            <div className="flex justify-center my-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => (otpRefs.current[index] = el)}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-10 border text-center text-xl rounded-md mx-1"
                />
              ))}
            </div>
            {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
            <button onClick={handleOtpVerification} className="w-full bg-[#170645] text-[#FFE100] p-2 rounded-full">
              Confirm
            </button>
          </>
        ) : page === "profile" ? (
          <>
            <h2 className="text-[32px] font-[Poppins] font-bold text-center leading-[38.4px] tracking-[-0.8px] text-[#170645] p-2 rounded-md">Update Profile</h2>
            <p className="text-[20px] font-[Poppins] font-normal leading-[25.6px] tracking-[0px] text-center text-[#170645] p-2 rounded-md">Update Below Details</p>
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full p-3 rounded-full mb-4" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-3 rounded-full mb-4" />
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="border w-full p-3 rounded-full mb-4">
              {chhattisgarhCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button className="w-full bg-[#170645] text-[#FFE100] p-3 rounded-full" onClick={handleProfileUpdate}>
              Update Profile
            </button>
          </>
        ) : null}
      </div>
      <div className="hidden md:flex md:w-1/2 p-10 ">
        <img src={images[currentImage]} 
    alt="Slideshow" 
    className="w-[700px] h-[700px] absolute top-[20px] left-[800px] 
             rounded-tl-[30px] rounded-br-[30px]" />
      </div>
    </div>
  );
}
