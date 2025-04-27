import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, LogOut } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  toggleSidebar?: () => void;
  showSidebarToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleSidebar, 
  showSidebarToggle = false 
}) => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  
  // Only show full header in authenticated pages that are not the landing page
  const isFullHeader = isAuthenticated && location.pathname !== '/';
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {showSidebarToggle && (
            <button 
              className="mr-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          
          <Link to={isAuthenticated ? '/dashboard' : '/'} className="flex items-center">
            <Logo size={isFullHeader ? 'sm' : 'md'} />
          </Link>
        </div>
        
        {isFullHeader && (
          <div className="hidden md:flex items-center max-w-md w-full mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search notes..."
                className="form-input pl-10 py-1.5 w-full"
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <div className="relative ml-4">
              <button
                className="h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                {user?.avatarUrl ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-primary-600 flex items-center justify-center text-white">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      logout();
                      setShowUserMenu(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : location.pathname !== '/login' && location.pathname !== '/signup' ? (
            <div className="ml-4 flex items-center space-x-2">
              <Link
                to="/login"
                className="btn-outline text-sm py-1.5 px-3"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="btn-primary text-sm py-1.5 px-3"
              >
                Sign up
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;