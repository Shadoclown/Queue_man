import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  activePage: 'dashboard' | 'appointments' | 'calendar' | 'profile';
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const getNavLinkClass = (page: string) => {
    return activePage === page
      ? "bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium";
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                AppointIQ <span className="text-gray-500 text-sm font-normal">Demo</span>
              </h1>
            </div>
            <nav className="flex space-x-8">
              <Link to="/dashboard" className={getNavLinkClass('dashboard')}>
                Dashboard
              </Link>
              <Link to="/appointments" className={getNavLinkClass('appointments')}>
                Appointments
              </Link>
              <a href="#" className={getNavLinkClass('calendar')}>
                📅 Calendar
              </a>
              <a href="#" className={getNavLinkClass('profile')}>
                Profile
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              👥 Staff
            </button>
            <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              🚪 Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
