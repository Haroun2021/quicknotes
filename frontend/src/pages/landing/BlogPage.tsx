import React from 'react';
import Layout from "../../components/layout/Layout";

import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

const BlogPage: React.FC = () => {
  const featuredPost: BlogPost = {
    id: 'featured-1',
    title: '5 Tips to Take Better Notes and Improve Your Memory',
    excerpt: 'Learn effective note-taking techniques that help you remember more and understand complex topics better.',
    date: 'Jun 15, 2025',
    readTime: '8 min read',
    category: 'Productivity',
    imageUrl: 'https://images.pexels.com/photos/6930425/pexels-photo-6930425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  };

  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'How to Stay Productive While Working Remotely',
      excerpt: 'Discover actionable strategies to maintain focus and productivity when working from home.',
      date: 'Jun 10, 2025',
      readTime: '6 min read',
      category: 'Productivity',
      imageUrl: 'https://images.pexels.com/photos/5717402/pexels-photo-5717402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'post-2',
      title: 'Organizing Your Digital Life: A Guide to Information Management',
      excerpt: 'Learn how to organize your digital notes, files, and documents for maximum efficiency.',
      date: 'Jun 5, 2025',
      readTime: '7 min read',
      category: 'Organization',
      imageUrl: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'post-3',
      title: 'The Science of Note-Taking: How Writing Things Down Helps You Remember',
      excerpt: 'Explore the cognitive science behind why taking notes improves memory and learning.',
      date: 'May 28, 2025',
      readTime: '9 min read',
      category: 'Research',
      imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'post-4',
      title: 'Collaborative Note-Taking: Strategies for Teams',
      excerpt: 'Discover how teams can use collaborative note-taking to improve meetings and projects.',
      date: 'May 20, 2025',
      readTime: '5 min read',
      category: 'Collaboration',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'post-5',
      title: 'Minimalist Note-Taking: Doing More With Less',
      excerpt: 'Learn how minimalist approaches to note-taking can help you focus on what matters.',
      date: 'May 14, 2025',
      readTime: '4 min read',
      category: 'Minimalism',
      imageUrl: 'https://images.pexels.com/photos/6476590/pexels-photo-6476590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'post-6',
      title: 'From Notes to Knowledge: Building a Personal Knowledge Management System',
      excerpt: 'Turn your scattered notes into a comprehensive knowledge system that grows with you.',
      date: 'May 8, 2025',
      readTime: '10 min read',
      category: 'Knowledge Management',
      imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const categories = ['All', 'Productivity', 'Organization', 'Collaboration', 'Research', 'Minimalism', 'Knowledge Management'];

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              The QuickNotes Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Insights, tips, and strategies to help you take better notes and stay organized.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-2 mb-8 -mx-4 px-4 space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  category === 'All'
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredPost && (
            <div className="mb-10">
              <Card className="overflow-hidden" padding="none">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                        Featured
                      </span>
                      <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                        <Tag className="h-3.5 w-3.5 mr-1" />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div>
                      <Button variant="primary">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="h-64 lg:h-auto bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={featuredPost.imageUrl} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md"
                padding="none"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                      <Tag className="h-3.5 w-3.5 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Button 
                    variant="ghost" 
                    className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 -ml-2"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Get the latest articles, productivity tips, and QuickNotes updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;