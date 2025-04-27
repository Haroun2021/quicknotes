import React from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { 
  Feather, 
  RefreshCw, 
  Bell, 
  Tag, 
  Users, 
  Smartphone, 
  Bookmark, 
  Check, 
  Clock, 
  Lock, 
  Zap 
} from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <div className="p-6 flex flex-col h-full">
        <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/40 p-3 w-12 h-12 flex items-center justify-center mb-4">
          <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
        </div>
        <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">{description}</p>
      </div>
    </Card>
  );
};

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Feather size={20} />,
      title: 'Markdown Editing',
      description: 'Write beautifully formatted notes with our simple, intuitive Markdown editor that helps you focus on your content.',
    },
    {
      icon: <RefreshCw size={20} />,
      title: 'Real-time Sync',
      description: 'Seamlessly sync your notes across all your devices in real-time, so you\'re always up-to-date.',
    },
    {
      icon: <Bell size={20} />,
      title: 'Task Reminders',
      description: 'Never miss a deadline with customizable reminders for your tasks and to-dos.',
    },
    {
      icon: <Tag size={20} />,
      title: 'Tags Organization',
      description: 'Organize your notes with tags and quickly find what you need with powerful search features.',
    },
    {
      icon: <Users size={20} />,
      title: 'Collaboration',
      description: 'Share notes and collaborate with teammates in real-time to boost productivity.',
    },
    {
      icon: <Smartphone size={20} />,
      title: 'Mobile & Web Access',
      description: 'Access your notes from anywhere, anytime with our web app and mobile applications.',
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Powerful Features to Boost Your Productivity
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              QuickNotes comes packed with everything you need to capture ideas, stay organized, and get more done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Advanced Note-Taking, Simplified</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our unique approach to note-taking combines powerful features with an intuitive interface, 
                  so you can focus on your thoughts without worrying about the tool.
                </p>
                <ul className="space-y-3">
                  {[
                    'Rich text formatting with Markdown',
                    'Code snippets with syntax highlighting',
                    'Image and file attachments',
                    'Tables and structured content',
                    'Dark mode for comfortable night writing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="primary" size="lg">
                    Try It Free
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-1 border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="QuickNotes editor interface" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Users Love QuickNotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={24} />,
                title: 'Improved Productivity',
                description: 'Users report saving up to 5 hours per week with our streamlined note-taking system.'
              },
              {
                icon: <Clock size={24} />,
                title: 'Quick Setup',
                description: 'Get started in minutes with an intuitive interface that requires zero learning curve.'
              },
              {
                icon: <Lock size={24} />,
                title: 'Secure and Private',
                description: 'Your notes are encrypted and only accessible to you. We prioritize your privacy.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-indigo-600 dark:text-indigo-400 mx-auto mb-4">
                  <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/40 p-4 w-16 h-16 flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already organizing their thoughts with QuickNotes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;