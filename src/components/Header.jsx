import { useState } from 'react';
import { FaSearch, FaBell, FaCommentDots, FaCog } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type to search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Icon and Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Settings Icon */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaCog className="text-gray-600" />
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaBell className="text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        {/* Messages Icon */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaCommentDots className="text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button onClick={toggleProfileDropdown} className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Replace with actual image URL
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-medium">Thomas Anree</p>
              <p className="text-xs text-gray-500">UX Designer</p>
            </div>
            <span className="text-gray-500">&#9662;</span>
          </button>

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
