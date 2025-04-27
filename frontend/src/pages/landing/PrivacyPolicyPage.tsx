import React from 'react';
import Layout from '../../components/layout/Layout';
import { Clock } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'May 15, 2025';
  
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>

            <div className="prose prose-indigo max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300">
              <p>
                At QuickNotes, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your information when you use our services, as well as the choices you have regarding your information.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Platform, including:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> When you create an account, we collect your name, email address, and other contact details you provide.
                </li>
                <li>
                  <strong>Content Information:</strong> We store the notes, documents, and other content you create, upload, or store in your QuickNotes account.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about how you use our Platform, including your login times, features you use, and other actions you take within our services.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about the devices you use to access our services, including IP address, browser type, operating system, and device identifiers.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>With Your Consent:</strong> We will share your personal information with third parties when we have your consent to do so.
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                </li>
                <li>
                  <strong>Compliance with Laws:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Choices and Rights</h2>
              <p>
                You have several choices regarding the use of your information on our Platform:
              </p>
              <ul>
                <li>
                  <strong>Account Information:</strong> You can update your account information at any time by logging into your account and accessing your profile settings.
                </li>
                <li>
                  <strong>Marketing Communications:</strong> You can opt out of receiving marketing emails from us by clicking the "unsubscribe" link in our emails.
                </li>
                <li>
                  <strong>Data Access and Portability:</strong> You can request access to the personal information we hold about you and request that it be exported in a machine-readable format.
                </li>
                <li>
                  <strong>Data Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions provided by law.
                </li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as quickly as possible.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                We may transfer your personal information to countries other than the one in which you live. We deploy appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@quicknotes.com<br />
                <strong>Address:</strong> QuickNotes Privacy Team, 123 Productivity Lane, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;