import React from 'react';
import Layout from '../../components/layout/Layout';
import { Clock } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = 'May 15, 2025';
  
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Terms of Service
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>

            <div className="prose prose-indigo max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300">
              <p>
                Welcome to QuickNotes. These Terms of Service ("Terms") govern your access to and use of the QuickNotes platform, including our website, mobile applications, and other online products and services (collectively, the "Platform"). Please read these Terms carefully before using our Platform.
              </p>

              <p>
                By accessing or using our Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Platform.
              </p>

              <h2>1. Account Registration</h2>
              <p>
                To use certain features of the Platform, you may need to register for an account. When you register, you agree to provide accurate and complete information and to keep this information updated. You are responsible for safeguarding your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
              </p>

              <h2>2. User Content</h2>
              <p>
                Our Platform allows you to create, upload, store, send, and share content, including text, files, images, and other materials ("User Content"). You retain ownership of your User Content, but you grant us a non-exclusive, royalty-free, worldwide, sublicensable license to use, display, and store your User Content to provide you with our services and to maintain the Platform.
              </p>

              <p>
                You are solely responsible for your User Content and represent that you have all rights necessary to grant us the license described above. You are also responsible for ensuring that your User Content does not violate any applicable laws or these Terms.
              </p>

              <h2>3. Prohibited Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use the Platform in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Platform</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Platform for any purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the Platform or any system or network connected to the Platform</li>
                <li>Use the Platform to store or transmit any content that is illegal, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
                <li>Use the Platform to violate the legal rights of others or to violate laws, regulations, or contractual agreements</li>
                <li>Impersonate or attempt to impersonate QuickNotes, a QuickNotes employee, or another user</li>
                <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Platform</li>
              </ul>

              <h2>4. Subscription and Payment</h2>
              <p>
                Some features of our Platform require a paid subscription. You agree to pay all fees and charges associated with your subscription according to the pricing and terms displayed to you at the time of purchase. We may change our fees and charges at any time, with advance notice to you.
              </p>

              <p>
                Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings. After cancellation, your subscription will remain active until the end of the current billing period.
              </p>

              <h2>5. Intellectual Property Rights</h2>
              <p>
                The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by QuickNotes, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>

              <h2>6. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms. Upon termination, your right to use the Platform will immediately cease.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PROVIDED BY LAW, QUICKNOTES DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL QUICKNOTES, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE PLATFORM, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms and any dispute arising out of or related to these Terms or the Platform shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Platform thereafter. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@quicknotes.com<br />
                <strong>Address:</strong> QuickNotes Legal Department, 123 Productivity Lane, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;