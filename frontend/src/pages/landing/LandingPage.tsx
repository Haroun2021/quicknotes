import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Shield, Zap, Dice1 as Device, MessageSquare, Star } from 'lucide-react';
import Button from '../../components/ui/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              Capture your ideas,<br />
              <span className="text-primary-600 dark:text-primary-400">anytime, anywhere</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              QuickNotes helps you organize your thoughts, ideas, and tasks with powerful note-taking features and seamless sync across all your devices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" variant="primary" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Get Started Free
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="neumorphic p-4 md:p-6 rounded-2xl max-w-lg mx-auto transform transition-transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img 
                src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="QuickNotes Interface" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Everything you need for better note-taking
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features to help you capture, organize, and access your notes from anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Markdown Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Write your notes in Markdown and see them beautifully formatted in real-time with our live preview.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure Storage</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your notes are encrypted and securely stored, so your sensitive information remains private.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Instant Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find what you're looking for in seconds with our powerful search functionality.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <Device className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Cross-Platform</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access your notes from any device with our responsive web app and upcoming mobile applications.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tag Organization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organize your notes with custom tags to quickly find related content and keep everything structured.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easy on the eyes with a beautiful dark mode that automatically adapts to your system preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Loved by note-takers worldwide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See what our users have to say about QuickNotes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900 dark:text-white">Jennifer S.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Writer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "QuickNotes has completely transformed how I organize my writing projects. The markdown support is exactly what I needed!"
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900 dark:text-white">Michael T.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "I use QuickNotes daily for meeting notes and project planning. The tagging system makes it easy to find everything later."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold">
                  AR
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900 dark:text-white">Alex R.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "As a developer, I appreciate the clean interface and markdown support. It's perfect for code snippets and project documentation."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 dark:bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to start taking better notes?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already organizing their thoughts with QuickNotes.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="accent" className="px-10">
              Get Started for Free
            </Button>
          </Link>
          <p className="mt-4 text-primary-200 dark:text-primary-300">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;