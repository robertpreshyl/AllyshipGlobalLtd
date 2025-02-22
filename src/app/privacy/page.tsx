import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Allyship Global Ltd',
  description: 'Privacy policy and data protection information for Allyship Global Ltd users and partners.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="mb-8 font-heading text-4xl font-bold">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Last updated: March 1, 2024
        </p>

        <h2>1. Introduction</h2>
        <p>
          Allyship Global Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website allyshipglobal.com and use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>Name and contact details</li>
          <li>Professional and employment information</li>
          <li>Investment preferences and history</li>
          <li>Financial information and accreditation status</li>
          <li>Communication preferences</li>
          <li>Technical data (IP address, browser type, device information)</li>
        </ul>

        <h3>2.2 Usage Data</h3>
        <p>
          We automatically collect usage data when you visit our website, including:
        </p>
        <ul>
          <li>Pages viewed and interactions</li>
          <li>Access times and duration</li>
          <li>Device and connection information</li>
          <li>Location data</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
          <li>Providing and improving our investment services</li>
          <li>Processing investment transactions</li>
          <li>Communicating about opportunities and services</li>
          <li>Compliance with legal and regulatory requirements</li>
          <li>Fraud prevention and security</li>
          <li>Marketing and promotional activities (with consent)</li>
        </ul>

        <h2>4. Information Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Investment partners and service providers</li>
          <li>Regulatory authorities and legal entities</li>
          <li>Professional advisors and consultants</li>
          <li>Third-party service providers</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information, including:
        </p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Access controls and authentication</li>
          <li>Regular security assessments</li>
          <li>Employee training and confidentiality agreements</li>
        </ul>

        <h2>6. International Data Transfers</h2>
        <p>
          As a global investment firm, we may transfer your personal information to countries outside your jurisdiction. We ensure appropriate safeguards are in place through:
        </p>
        <ul>
          <li>Standard contractual clauses</li>
          <li>Data protection agreements</li>
          <li>Compliance with international data protection laws</li>
        </ul>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>

        <h2>8. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
        </p>

        <h2>10. Changes to Privacy Policy</h2>
        <p>
          We may update this privacy policy periodically. We will notify you of any material changes through our website or direct communication.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          For privacy-related inquiries or to exercise your rights, contact us at:
        </p>
        <p>
          Data Protection Officer<br />
          Allyship Global Ltd<br />
          Email: privacy@allyshipglobal.com
        </p>

        <div className="mt-12 rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Questions About Our Privacy Policy?</h3>
          <p className="mt-2">
            If you have any questions about our privacy practices or would like to exercise your rights, please contact our Data Protection team.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 