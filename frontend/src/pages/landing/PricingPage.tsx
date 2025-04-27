import React from 'react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  popular?: boolean;
  features: PricingFeature[];
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started with basic note-taking',
      buttonText: 'Get Started',
      features: [
        { name: 'Up to 50 notes', included: true },
        { name: 'Basic formatting', included: true },
        { name: 'Mobile and web access', included: true },
        { name: 'Tags organization', included: true },
        { name: 'Limited to 5MB storage', included: true },
        { name: 'Team sharing', included: false },
        { name: 'Email reminders', included: false },
        { name: 'API access', included: false },
        { name: 'Priority support', included: false },
      ]
    },
    {
      name: 'Pro',
      price: '$9.99',
      description: 'Everything you need for professional note-taking',
      buttonText: 'Start Pro Plan',
      popular: true,
      features: [
        { name: 'Unlimited notes', included: true },
        { name: 'Advanced formatting', included: true },
        { name: 'Mobile and web access', included: true },
        { name: 'Tags organization', included: true },
        { name: 'Unlimited storage', included: true },
        { name: 'Team sharing', included: true },
        { name: 'Email reminders', included: true },
        { name: 'API access', included: true },
        { name: 'Priority support', included: true },
      ]
    }
  ];

  const yearlyDiscount = 20;
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Choose the perfect plan to help you stay organized and productive.
              No hidden fees or complicated tiers.
            </p>

            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                    : 'bg-transparent text-gray-600 dark:text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                    : 'bg-transparent text-gray-600 dark:text-gray-400'
                }`}
              >
                Yearly <span className="text-indigo-600 dark:text-indigo-400">(-{yearlyDiscount}%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const price = plan.price === '$0' ? 
                plan.price : 
                billingCycle === 'yearly' ? 
                  `$${(parseFloat(plan.price.replace('$', '')) * (1 - yearlyDiscount / 100)).toFixed(2)}` : 
                  plan.price;
              
              return (
                <Card 
                  key={index} 
                  className={`relative ${plan.popular ? 'border-indigo-500 dark:border-indigo-400 border-2' : ''}`}
                  padding="lg"
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {price}
                      </span>
                      {plan.price !== '$0' && (
                        <span className="ml-1 text-gray-500 dark:text-gray-400">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 py-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`${
                            feature.included 
                              ? 'text-gray-700 dark:text-gray-300' 
                              : 'text-gray-500 dark:text-gray-500'
                          }`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant={plan.popular ? 'primary' : 'secondary'} 
                      fullWidth
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Still have questions about our pricing? Here are answers to some common questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Can I switch between plans?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to all features. When downgrading, you\'ll keep your current plan until the next billing cycle.'
              },
              {
                question: 'Is there a limit to how many notes I can create on the Free plan?',
                answer: 'The Free plan is limited to 50 notes. Once you reach this limit, you\'ll need to upgrade to the Pro plan to create more notes, or delete existing notes to make room for new ones.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also accept PayPal for payments.'
              },
              {
                question: 'Can I try the Pro plan before committing?',
                answer: 'Yes! We offer a 14-day free trial of our Pro plan. You\'ll get full access to all features during this period with no obligation to continue.'
              },
              {
                question: 'What happens to my notes if I cancel my subscription?',
                answer: 'If you cancel your Pro subscription, your account will revert to the Free plan at the end of your billing period. You\'ll still have access to your notes, but you\'ll be limited to the Free plan features and storage limits.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already organizing their thoughts with QuickNotes.
            No credit card required for free accounts.
          </p>
          <Button
            variant="secondary"
            size="lg"
          >
            Start Your Free Account
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;