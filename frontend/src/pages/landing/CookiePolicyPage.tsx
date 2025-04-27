import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const lastUpdated = 'May 15, 2025';
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  
  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const cookieCategories = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
      required: true,
      examples: [
        { name: "session_id", purpose: "Used to maintain your authenticated session", duration: "Session" },
        { name: "csrf_token", purpose: "Security cookie to prevent cross-site request forgery", duration: "Session" },
        { name: "auth_token", purpose: "Used to keep you logged in", duration: "30 days" }
      ]
    },
    {
      title: "Performance Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
      required: false,
      examples: [
        { name: "_ga", purpose: "Google Analytics cookie used to distinguish users", duration: "2 years" },
        { name: "_gid", purpose: "Google Analytics cookie used to distinguish users", duration: "24 hours" },
        { name: "_gat", purpose: "Google Analytics cookie used to throttle request rate", duration: "1 minute" }
      ]
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.",
      required: false,
      examples: [
        { name: "theme_preference", purpose: "Remembers your dark/light mode preference", duration: "1 year" },
        { name: "language", purpose: "Remembers your language preference", duration: "1 year" },
        { name: "recent_views", purpose: "Tracks recently viewed notes for quick access", duration: "30 days" }
      ]
    },
    {
      title: "Targeting Cookies",
      description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
      required: false,
      examples: [
        { name: "_fbp", purpose: "Facebook pixel tracking cookie", duration: "3 months" },
        { name: "IDE", purpose: "Google DoubleClick cookie for ad targeting", duration: "1 year" },
        { name: "personalization_id", purpose: "Twitter personalization cookie", duration: "2 years" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Cookie Policy
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This Cookie Policy explains how QuickNotes ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Cookie Preferences
                </h2>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You can choose which categories of cookies you allow. Essential cookies cannot be disabled as they are necessary for the website to function properly.
                  </p>
                  
                  <div className="space-y-4">
                    {cookieCategories.map((category, index) => (
                      <div 
                        key={index} 
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
                          <div className="flex items-center">
                            <div className="mr-4">
                              <label className="inline-flex items-center cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  defaultChecked={category.required} 
                                  disabled={category.required}
                                  className="sr-only peer"
                                />
                                <div className={`relative w-11 h-6 ${category.required ? 'bg-green-600' : 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600'}`}></div>
                              </label>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                              {category.required && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">Required</span>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={() => toggleSection(index)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          >
                            {expandedSections.includes(index) ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                        
                        {expandedSections.includes(index) && (
                          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {category.description}
                            </p>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                  <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                      Cookie Name
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                      Purpose
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                      Duration
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                  {category.examples.map((cookie, cookieIndex) => (
                                    <tr key={cookieIndex}>
                                      <td className="px-4 py-2 text-sm text-gray-900 dark:text-white">
                                        {cookie.name}
                                      </td>
                                      <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        {cookie.purpose}
                                      </td>
                                      <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        {cookie.duration}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">
                      Save Preferences
                    </Button>
                    <Button variant="secondary">
                      Accept All
                    </Button>
                    <Button variant="outline">
                      Reject Non-Essential
                    </Button>
                  </div>
                </div>
              </div>

              <div className="prose prose-indigo max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300">
                <h2>What are cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, QuickNotes) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                </p>

                <h2>Why do we use cookies?</h2>
                <p>
                  We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website and applications. Third parties serve cookies through our website for advertising, analytics, and other purposes.
                </p>

                <h2>How can you control cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Preferences section above.
                </p>
                <p>
                  You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>

                <h2>How often will we update this Cookie Policy?</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                <p>
                  The date at the top of this Cookie Policy indicates when it was last updated.
                </p>

                <h2>Where can you get further information?</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please email us at privacy@quicknotes.com or by post to:
                </p>
                <p>
                  QuickNotes Privacy Team<br />
                  123 Productivity Lane<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicyPage;