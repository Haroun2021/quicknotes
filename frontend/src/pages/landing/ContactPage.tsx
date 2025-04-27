import React from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you. 
              Our team is here to help make your experience with QuickNotes even better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Help with my account"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Please describe how we can help you..."
                      required
                    ></textarea>
                  </div>
                  <Button variant="primary" type="submit" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="mb-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">support@quicknotes.com</p>
                      <p className="text-gray-600 dark:text-gray-300">info@quicknotes.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">QuickNotes HQ</p>
                      <p className="text-gray-600 dark:text-gray-300">123 Productivity Lane</p>
                      <p className="text-gray-600 dark:text-gray-300">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="flex-grow">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Need Help?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For faster support, check our help center first. You might find an immediate answer to your question.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Live Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center"
                  >
                    Visit Help Center
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Our Location
            </h2>
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
              {/* Map placeholder - in a real implementation, this would be an actual map */}
              <div className="bg-gray-200 dark:bg-gray-700 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already organizing their thoughts with QuickNotes.
          </p>
          <Button
            variant="secondary"
            size="lg"
          >
            Sign Up for Free
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;