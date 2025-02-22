import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Allyship Global Ltd',
  description: 'Terms and conditions for using Allyship Global Ltd services and platform.',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <h1 className="mb-8 font-heading text-4xl font-bold">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Last updated: March 1, 2024
        </p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the services of Allyship Global Ltd ("Company," "we," "our," or "us"), including our website allyshipglobal.com, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
        </p>

        <h2>2. Services Description</h2>
        <p>
          Allyship Global Ltd provides investment advisory and facilitation services, including but not limited to:
        </p>
        <ul>
          <li>Cross-border investment opportunities</li>
          <li>Investment advisory services</li>
          <li>Market analysis and insights</li>
          <li>Partnership facilitation</li>
          <li>Investment portfolio management</li>
        </ul>

        <h2>3. User Eligibility</h2>
        <p>
          To use our services, you must:
        </p>
        <ul>
          <li>Be at least 18 years old</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Meet accreditation requirements where applicable</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>

        <h2>4. Investment Risks and Disclaimers</h2>
        <p>
          All investments carry risk. By using our services, you acknowledge:
        </p>
        <ul>
          <li>Past performance is not indicative of future results</li>
          <li>Investments may lose value</li>
          <li>International investments carry additional risks</li>
          <li>You should conduct due diligence before investing</li>
        </ul>

        <h2>5. User Obligations</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Notify us of unauthorized access</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Use our services in good faith</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by Allyship Global Ltd and are protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>7. Confidentiality</h2>
        <p>
          You agree to maintain the confidentiality of any non-public information received through our services, including:
        </p>
        <ul>
          <li>Investment opportunities</li>
          <li>Market analysis</li>
          <li>Partner information</li>
          <li>Transaction details</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Allyship Global Ltd shall not be liable for:
        </p>
        <ul>
          <li>Investment losses or damages</li>
          <li>Indirect or consequential damages</li>
          <li>Service interruptions</li>
          <li>Third-party actions</li>
        </ul>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Allyship Global Ltd from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
        </p>

        <h2>10. Termination</h2>
        <p>
          We reserve the right to:
        </p>
        <ul>
          <li>Terminate or suspend access to our services</li>
          <li>Modify or discontinue services</li>
          <li>Refuse service to anyone</li>
          <li>Change terms with notice</li>
        </ul>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
        </p>

        <h2>12. Dispute Resolution</h2>
        <p>
          Any disputes arising from these Terms shall be resolved through:
        </p>
        <ul>
          <li>Good faith negotiations</li>
          <li>Mediation</li>
          <li>Arbitration in London, UK</li>
          <li>Courts of competent jurisdiction</li>
        </ul>

        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify users of material changes through our website or direct communication.
        </p>

        <h2>14. Contact Information</h2>
        <p>
          For questions about these Terms, contact us at:
        </p>
        <p>
          Legal Department<br />
          Allyship Global Ltd<br />
          Email: legal@allyshipglobal.com
        </p>

        <div className="mt-12 rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Questions About Our Terms?</h3>
          <p className="mt-2">
            If you have any questions about our Terms of Service or need clarification, please contact our Legal team.
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