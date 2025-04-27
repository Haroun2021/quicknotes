import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Search, ChevronDown, ChevronUp, BookOpen, Lightbulb, HelpCircle, Settings } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  const faqItems: FAQItem[] = [
    {
      question: 'How do I create a new note?',
      answer: 'To create a new note, click on the "+" button in the top-right corner of the dashboard. You can also use the keyboard shortcut Ctrl+N (or Cmd+N on Mac).',
      category: 'basics'
    },
    {
      question: 'Can I organize notes into folders?',
      answer: 'QuickNotes uses tags instead of folders. You can add multiple tags to each note and filter your notes by tag. This provides more flexibility than traditional folders as a note can exist in multiple "locations" at once.',
      category: 'organization'
    },
    {
      question: 'How do I format text in my notes?',
      answer: 'QuickNotes supports Markdown formatting. You can use asterisks for *italic* text, double asterisks for **bold** text, hashes for # headings, and more. You can also use the formatting toolbar above the editor.',
      category: 'basics'
    },
    {
      question: 'Is there a limit to how many notes I can create?',
      answer: 'Free accounts can create up to 50 notes. Pro accounts have unlimited notes. You can view your current usage on the account settings page.',
      category: 'account'
    },
    {
      question: 'How do I share notes with others?',
      answer: 'To share a note, open it and click the "Share" button in the top-right corner. You can invite people by email or generate a shareable link. Note that sharing features are only available on Pro accounts.',
      category: 'collaboration'
    },
    {
      question: 'Can I access my notes offline?',
      answer: 'Yes, our desktop and mobile apps support offline access. Any changes you make while offline will sync automatically when you reconnect to the internet.',
      category: 'access'
    },
    {
      question: 'How do I set a reminder for a note?',
      answer: 'Open the note and click the bell icon in the toolbar. You can set a date and time for the reminder. You\'ll receive a notification at the specified time.',
      category: 'features'
    },
    {
      question: 'How secure are my notes?',
      answer: 'Your notes are encrypted both in transit and at rest. We use industry-standard security practices to ensure your data remains private. For additional security, you can enable two-factor authentication in your account settings.',
      category: 'security'
    }
  ];

  const toggleFAQ = (index: number) => {
    if (expandedFAQs.includes(index)) {
      setExpandedFAQs(expandedFAQs.filter(i => i !== index));
    } else {
      setExpandedFAQs([...expandedFAQs, index]);
    }
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Help Center
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Find answers to common questions and learn how to make the most of QuickNotes.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: <BookOpen className="h-6 w-6" />, title: 'Getting Started', description: 'Learn the basics of QuickNotes', link: '#' },
              { icon: <Lightbulb className="h-6 w-6" />, title: 'Tips & Tricks', description: 'Get the most out of QuickNotes', link: '#' },
              { icon: <Settings className="h-6 w-6" />, title: 'Troubleshooting', description: 'Solve common issues', link: '#' }
            ].map((item, index) => (
              <Card key={index} className="text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 whitespace-nowrap ${
                    activeTab === 'all'
                      ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  All
                </button>
                {['basics', 'organization', 'features', 'account', 'collaboration', 'security'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 capitalize whitespace-nowrap ${
                      activeTab === category
                        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left bg-white dark:bg-gray-800"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                      {expandedFAQs.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQs.includes(index) && (
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    No results found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary">
                Contact Support
              </Button>
              <Button variant="secondary">
                Browse Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpCenterPage;