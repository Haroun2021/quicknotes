import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/ui/Logo';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      await forgotPassword(email);
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send reset instructions. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          
          {!isSuccess ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Reset your password
              </h2>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
              
              {error && (
                <div className="mb-6 p-3 bg-error-50 dark:bg-error-900/20 text-error-700 dark:text-error-400 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="h-5 w-5" />}
                  placeholder="you@example.com"
                  fullWidth
                />
                
                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    leftIcon={<Send className="h-5 w-5" />}
                    fullWidth
                  >
                    Send Reset Instructions
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-success-100 dark:bg-success-900/20">
                <Send className="h-8 w-8 text-success-500" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Check your email
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We've sent password recovery instructions to <span className="font-medium">{email}</span>. Please check your email.
              </p>
              
              <Button
                variant="outline"
                onClick={() => setIsSuccess(false)}
              >
                Try another email
              </Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Link 
              to="/login" 
              className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;