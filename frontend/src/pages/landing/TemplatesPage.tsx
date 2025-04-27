import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { CheckCircle2, Star, Clock, Briefcase, Calendar, BookOpen, FileText, List, Tag, Search } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'productivity' | 'work' | 'personal' | 'education';
  premium: boolean;
  popular: boolean;
}

const TemplatesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const templates: Template[] = [
    {
      id: 'todo-list',
      title: 'To-Do List',
      description: 'A simple but powerful to-do list template to keep track of your tasks.',
      icon: <CheckCircle2 className="h-6 w-6" />,
      category: 'productivity',
      premium: false,
      popular: true
    },
    {
      id: 'meeting-notes',
      title: 'Meeting Notes',
      description: 'Structure your meeting notes with agenda items, action points, and decisions.',
      icon: <Briefcase className="h-6 w-6" />,
      category: 'work',
      premium: false,
      popular: true
    },
    {
      id: 'daily-journal',
      title: 'Daily Journal',
      description: 'Reflect on your day, track your mood, and set intentions for tomorrow.',
      icon: <Calendar className="h-6 w-6" />,
      category: 'personal',
      premium: false,
      popular: true
    },
    {
      id: 'weekly-planner',
      title: 'Weekly Planner',
      description: 'Plan your week ahead with goals, tasks, and time blocks.',
      icon: <Clock className="h-6 w-6" />,
      category: 'productivity',
      premium: false,
      popular: false
    },
    {
      id: 'project-tracker',
      title: 'Project Tracker',
      description: 'Keep your projects on track with milestones, tasks, and progress tracking.',
      icon: <List className="h-6 w-6" />,
      category: 'work',
      premium: true,
      popular: true
    },
    {
      id: 'reading-notes',
      title: 'Reading Notes',
      description: 'Take structured notes on books with key insights and quotes.',
      icon: <BookOpen className="h-6 w-6" />,
      category: 'education',
      premium: true,
      popular: false
    },
    {
      id: 'habit-tracker',
      title: 'Habit Tracker',
      description: 'Track your daily habits and build consistency over time.',
      icon: <CheckCircle2 className="h-6 w-6" />,
      category: 'personal',
      premium: true,
      popular: false
    },
    {
      id: 'lecture-notes',
      title: 'Lecture Notes',
      description: 'Structure your lecture notes with clear sections and highlights.',
      icon: <FileText className="h-6 w-6" />,
      category: 'education',
      premium: false,
      popular: false
    },
    {
      id: 'content-calendar',
      title: 'Content Calendar',
      description: 'Plan and schedule your content with a clear overview of your publishing schedule.',
      icon: <Calendar className="h-6 w-6" />,
      category: 'work',
      premium: true,
      popular: false
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'work', name: 'Work' },
    { id: 'personal', name: 'Personal' },
    { id: 'education', name: 'Education' },
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Note Templates
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Jump-start your note-taking with professionally designed templates for every purpose.
            </p>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search templates..."
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 mb-8 -mx-4 px-4 space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card 
                key={template.id} 
                className="h-full flex flex-col transition-all duration-300 hover:shadow-md"
                padding="none"
              >
                <div className="relative p-6 flex-grow">
                  {template.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                        <Star className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                      {template.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{template.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{template.description}</p>
                  {template.premium && (
                    <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                      Premium
                    </span>
                  )}
                  <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    <Tag className="h-3.5 w-3.5 mr-1" />
                    {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                  </span>
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <Button
                    variant={template.premium ? "secondary" : "primary"}
                    fullWidth
                  >
                    {template.premium ? "Upgrade to Pro" : "Use Template"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                No templates found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Create Your Own Templates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can't find what you need? Pro users can create and share custom templates with their team
              or the entire QuickNotes community.
            </p>
            <Button variant="primary" size="lg">
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TemplatesPage;