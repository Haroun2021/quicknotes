import React, { useState, useEffect, ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify-otp'].includes(location.pathname);
  const needsSidebar = isAuthenticated && !isLandingPage && !isAuthPage;
  const needsFooter = isLandingPage || isAuthPage;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} showSidebarToggle={needsSidebar} />

      
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {needsSidebar && <Sidebar isOpen={sidebarOpen} />}

        {/* Main Content */}
        <main className={`flex-1 flex flex-col overflow-y-auto transition-all duration-300 ${needsSidebar ? 'lg:ml-64' : ''}`}>
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {children || <Outlet />}
          </div>
        </main>
      </div>

      {/* Footer */}
      {needsFooter && (
        <Footer />
      )}

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && needsSidebar && (
        <div className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default Layout;
