import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactMap } from '@/components/sections/contact/ContactMap'
import { DirectContact } from '@/components/sections/contact/DirectContact'

export const metadata = {
  title: 'Contact Us | Allyship Global Ltd',
  description: 'Get in touch with Allyship Global Ltd. Reach out to our team for investment opportunities, partnerships, or general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            {/* Contact Form Section */}
            <div>
              <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Direct Contact Info */}
            <div>
              <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground">Direct Contact</h2>
              <DirectContact />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground">Our Global Presence</h2>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
} 