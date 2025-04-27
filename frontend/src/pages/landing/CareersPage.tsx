import React from 'react';
import Layout from '../../components/layout/Layout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { MapPin, Briefcase as BriefcaseBusiness, Clock, DollarSign, Heart, Send, ArrowRight } from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  remote: boolean;
  salary: string;
  description: string;
}

const CareersPage: React.FC = () => {
  const jobListings: JobListing[] = [
    {
      id: 'react-dev',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      remote: true,
      salary: '$120,000 - $150,000',
      description: 'We\'re looking for an experienced React developer to join our team and help build the next generation of note-taking tools. You\'ll be working on our web app and contributing to our design system.'
    },
    {
      id: 'product-designer',
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      remote: true,
      salary: '$100,000 - $130,000',
      description: 'Join our design team to create beautiful, intuitive interfaces that help users organize their thoughts. You\'ll collaborate with engineers and product managers to deliver exceptional user experiences.'
    },
    {
      id: 'growth-marketer',
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      remote: true,
      salary: '$90,000 - $120,000',
      description: 'Help us grow QuickNotes through data-driven marketing strategies. You\'ll be responsible for acquisition, retention, and engagement campaigns across multiple channels.'
    },
    {
      id: 'customer-success',
      title: 'Customer Success Specialist',
      department: 'Customer Support',
      location: 'Remote',
      type: 'Full-time',
      remote: true,
      salary: '$60,000 - $80,000',
      description: 'Join our customer success team to help users get the most out of QuickNotes. You\'ll provide exceptional support, create educational content, and gather feedback to improve our product.'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Developer (iOS/Android)',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      remote: true,
      salary: '$110,000 - $140,000',
      description: 'We\'re building native mobile apps for iOS and Android, and we need an experienced mobile developer to join our team. You\'ll work closely with our design and product teams to create a seamless mobile experience.'
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents.',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-from-anywhere policy.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with equity options for all full-time employees.',
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We're on a mission to help people capture their ideas and stay organized. 
              Join us and build tools that millions of people use every day.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="QuickNotes team collaborating"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-8 text-white max-w-3xl">
                  <h2 className="text-3xl font-bold mb-4">Life at QuickNotes</h2>
                  <p className="text-lg text-white/90 mb-6">
                    We're a diverse, passionate team building the future of note-taking. 
                    Our culture values creativity, collaboration, and work-life balance.
                  </p>
                  <Button variant="primary">
                    Learn About Our Culture
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Open Positions
            </h2>

            <div className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {jobListings.map((job) => (
                  <Card key={job.id} className="transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                            {job.department}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {job.type}
                          </span>
                          {job.remote && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                              Remote Eligible
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{job.location}</span>
                          <span className="mx-2">•</span>
                          <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span>{job.salary}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {job.description}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                        <Button variant="primary">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Don't see a role that matches your skills?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're always looking for talented people to join our team. 
                Send us your resume and we'll keep you in mind for future positions.
              </p>
              <Button variant="secondary" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">
              Why Work With Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center h-full">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                And many more benefits including: unlimited PTO, learning stipend, 
                home office budget, team events, and a supportive, inclusive culture.
              </p>
              <Button variant="outline">
                Learn More About Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <BriefcaseBusiness className="h-12 w-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Hiring Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We've designed our hiring process to be thorough but efficient. 
              Here's what you can expect when you apply to QuickNotes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  title: 'Application',
                  description: 'Submit your resume and cover letter online.'
                },
                {
                  step: 2,
                  title: 'Initial Interview',
                  description: '30-minute video call with our recruiting team.'
                },
                {
                  step: 3,
                  title: 'Technical Assessment',
                  description: 'Complete a take-home project or technical interview.'
                },
                {
                  step: 4,
                  title: 'Final Interviews',
                  description: 'Meet with the team and leadership for final discussions.'
                }
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-indigo-100 dark:bg-indigo-900/40 rounded-full h-12 w-12 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>

                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-[2px] bg-indigo-100 dark:bg-indigo-900/40 -z-10 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join our team and help build the future of note-taking and productivity.
          </p>
          <Button
            variant="secondary"
            size="lg"
          >
            View All Open Positions
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;