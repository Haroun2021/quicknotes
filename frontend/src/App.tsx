import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import OtpVerificationPage from './pages/auth/OtpVerificationPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import CreateNotePage from './pages/notes/CreateNotePage';
import EditNotePage from './pages/notes/EditNotePage';
import ViewNotePage from './pages/notes/ViewNotePage';
import ProfilePage from './pages/profile/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import FeaturesPage from './pages/landing/FeaturesPage';
import PricingPage from './pages/landing/PricingPage';
import DownloadPage from './pages/landing/DownloadPage'; 
import HelpCenterPage from './pages/landing/HelpCenterPage';
import TemplatesPage from './pages/landing/TemplatesPage';
import BlogPage from './pages/landing/BlogPage';
import ContactPage from './pages/landing/ContactPage';
import CareersPage from './pages/landing/CareersPage';
import PrivacyPolicyPage from './pages/landing/PrivacyPolicyPage';
import TermsOfServicePage from './pages/landing/TermsOfServicePage';
import CookiePolicyPage from './pages/landing/CookiePolicyPage';
import { useAuth } from './context/AuthContext';


// Protected route wrapper component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Auth route wrapper (redirects to dashboard if already authenticated)
const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  
  return <>{children}</>;
};

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
        {/* Auth routes */}
        <Route path="login" element={
          <AuthRoute>
            <LoginPage />
          </AuthRoute>
        } />
        <Route path="signup" element={
          <AuthRoute>
            <SignUpPage />
          </AuthRoute>
        } />
        <Route path="verify-otp" element={
          <AuthRoute>
            <OtpVerificationPage />
          </AuthRoute>
        } />
        <Route path="forgot-password" element={
          <AuthRoute>
            <ForgotPasswordPage />
          </AuthRoute>
        } />
        <Route path="reset-password" element={
          <AuthRoute>
            <ResetPasswordPage />
          </AuthRoute>
        } />
        
        {/* Protected routes */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="notes/new" element={
          <ProtectedRoute>
            <CreateNotePage />
          </ProtectedRoute>
        } />
        <Route path="notes/:id" element={
          <ProtectedRoute>
            <ViewNotePage />
          </ProtectedRoute>
        } />
        <Route path="notes/edit/:id" element={
          <ProtectedRoute>
            <EditNotePage />
          </ProtectedRoute>
        } />
        <Route path="profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="help" element={<HelpCenterPage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsOfServicePage />} />
        <Route path="cookies" element={<CookiePolicyPage />} />
      </Route>
    </Routes>
  );
}

export default App;