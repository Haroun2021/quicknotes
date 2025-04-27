import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const NotFoundPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <div className="animate-fade-in">
          <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white">404</h1>
          
          <div className="h-2 w-24 bg-primary-600 dark:bg-primary-500 mx-auto my-8 rounded-full"></div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to={isAuthenticated ? '/dashboard' : '/'}>
              <Button
                variant="primary"
                leftIcon={<Home className="h-5 w-5" />}
                className="w-full sm:w-auto"
              >
                {isAuthenticated ? 'Back to Dashboard' : 'Back to Home'}
              </Button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-outline w-full sm:w-auto"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;