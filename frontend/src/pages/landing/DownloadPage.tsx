import React from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Chrome, Apple, Cuboid as Android, AlertCircle, Check } from 'lucide-react';

const DownloadPage: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Access QuickNotes Everywhere
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Take your notes with you wherever you go with our suite of applications
              for browser, desktop and mobile devices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 overflow-hidden" padding="none">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Browser Extension
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Capture ideas, save web pages, and take notes without leaving your browser.
                      Our extension integrates seamlessly with Chrome and works across all your devices.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 p-2 rounded-full">
                        <AlertCircle size={16} />
                      </div>
                      <span className="ml-2 text-yellow-700 dark:text-yellow-500 text-sm">
                        Coming soon - Sign up to get notified when released
                      </span>
                    </div>
                    <Button 
                      variant="primary"
                      disabled
                    >
                      <Chrome className="mr-2 h-5 w-5" />
                      Chrome Extension
                    </Button>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                      <Chrome className="h-16 w-16 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                      <div className="flex items-center justify-center">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                          COMING SOON
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden" padding="none">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <Apple className="h-16 w-16 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    iOS App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    Take notes on the go with our beautifully designed iOS app.
                    Sync with all your devices and access your notes offline.
                  </p>
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 p-2 rounded-full">
                      <AlertCircle size={16} />
                    </div>
                    <span className="ml-2 text-yellow-700 dark:text-yellow-500 text-sm">
                      Coming soon
                    </span>
                  </div>
                  <div className="text-center">
                    <Button 
                      variant="secondary"
                      disabled
                    >
                      App Store
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden" padding="none">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <Android className="h-16 w-16 text-[#3DDC84] dark:text-[#3DDC84]" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    Android App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    Capture your ideas and stay organized with our Android app.
                    Perfect for phones and tablets with offline support.
                  </p>
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 p-2 rounded-full">
                      <AlertCircle size={16} />
                    </div>
                    <span className="ml-2 text-yellow-700 dark:text-yellow-500 text-sm">
                      Coming soon
                    </span>
                  </div>
                  <div className="text-center">
                    <Button 
                      variant="secondary"
                      disabled
                    >
                      Google Play
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Why Download QuickNotes?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Offline Access',
                  description: 'Continue working on your notes even without an internet connection. All changes will sync when you\'re back online.'
                },
                {
                  title: 'Better Performance',
                  description: 'Native apps offer better performance and faster load times compared to web applications.'
                },
                {
                  title: 'Enhanced Security',
                  description: 'Additional security features like biometric authentication for accessing your sensitive notes.'
                },
                {
                  title: 'Seamless Integration',
                  description: 'Integrate with your device\'s features like camera for attachments and system notifications for reminders.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 text-green-500 flex-shrink-0">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Be the first to know when our apps are released. Subscribe to our newsletter
            to receive updates and early access opportunities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadPage;