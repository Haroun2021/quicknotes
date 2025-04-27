import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Check } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/ui/Logo';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      await resetPassword(password);
      navigate('/login', { state: { message: 'Your password has been reset successfully. You can now log in with your new password.' } });
    } catch (err) {
      setErrors({ form: 'Failed to reset password. Please try again.' });
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
          
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Set new password
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Your new password must be different from previous used passwords.
          </p>
          
          {errors.form && (
            <div className="mb-6 p-3 bg-error-50 dark:bg-error-900/20 text-error-700 dark:text-error-400 rounded-lg text-sm">
              {errors.form}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <Input
              label="New Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="h-5 w-5" />}
              placeholder="••••••••"
              helperText="Must be at least 8 characters"
              error={errors.password}
              fullWidth
            />
            
            <Input
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              leftIcon={<Lock className="h-5 w-5" />}
              placeholder="••••••••"
              error={errors.confirmPassword}
              fullWidth
            />
            
            <div className="mt-6">
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                leftIcon={<Check className="h-5 w-5" />}
                fullWidth
              >
                Reset Password
              </Button>
            </div>
          </form>
          
          <div className="mt-6 space-y-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Password requirements:</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 pl-5 list-disc">
              <li>At least 8 characters long</li>
              <li>Include at least one uppercase letter</li>
              <li>Include at least one number</li>
              <li>Include at least one special character</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;