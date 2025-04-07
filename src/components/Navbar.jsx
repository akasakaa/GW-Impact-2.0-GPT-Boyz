import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo or App Name */}
        <div className="text-xl font-bold text-teal-700">
          MindEase
        </div>

        {/* Center Placeholder (optional nav links) */}
        <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {/* Add nav items here if needed */}
          {/* <a href="#" className="hover:text-teal-600">Home</a> */}
        </div>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
            onClick={toggleDropdown}
          />
          {open && (
           <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 text-black">
           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
         </div>
         
         
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
