import Head from 'next/head';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type HelpData = {
  meta: {
    title: string;
    description: string;
  };
  faqs: {
    question: string;
    answer: string | string[];
  }[];
  contact: {
    email: string;
    phone: string;
    hours: string;
  };
  footer: {
    text: string;
    contact: {
      email: string;
      address: string;
    };
  };
};

const helpData: HelpData = {
  meta: {
    title: 'Help Center | Cineparda',
    description: 'Get help with your Cineparda account and streaming service'
  },
  faqs: [
    {
      question: 'How do I reset my password?',
      answer: [
        'To reset your password:',
        '1. Go to the login page',
        '2. Click "Forgot Password"',
        '3. Enter your email address',
        '4. Follow the instructions in the email you receive'
      ]
    },
    {
      question: 'Why is my video buffering?',
      answer: [
        'Buffering can occur due to several reasons:',
        '- Slow internet connection (we recommend at least 5Mbps for HD streaming)',
        '- High network traffic in your area',
        '- Device performance issues',
        '- Router or modem problems'
      ]
    },
    {
      question: 'How do I cancel my subscription?',
      answer: [
        'To cancel your subscription:',
        '1. Log in to your account',
        '2. Go to Account Settings > Subscription',
        '3. Click "Cancel Subscription"',
        '4. Follow the confirmation prompts'
      ]
    },
    {
      question: 'What devices support Cineparda?',
      answer: [
        'Cineparda is available on:',
        '- Smart TVs (Samsung, LG, Android TV, Apple TV)',
        '- Streaming devices (Roku, Fire TV, Chromecast)',
        '- Game consoles (PlayStation, Xbox)',
        '- Mobile devices (iOS, Android)',
        '- Web browsers (Chrome, Safari, Firefox, Edge)'
      ]
    },
    {
      question: 'How do I update my payment method?',
      answer: [
        'To update your payment information:',
        '1. Log in to your account',
        '2. Go to Account Settings > Billing',
        '3. Click "Update Payment Method"',
        '4. Enter your new payment details'
      ]
    },
    {
      question: 'Why can\'t I access certain content?',
      answer: [
        'Content availability may be limited due to:',
        '- Regional licensing restrictions',
        '- Content rotation in our library',
        '- Account restrictions (parental controls)',
        '- Device or browser compatibility issues'
      ]
    }
  ],
  contact: {
    email: 'support@cineparda.com',
    phone: '+1 (800) 123-4567',
    hours: '24/7'
  },
  footer: {
    text: '© {year} Cineparda. All rights reserved.',
    contact: {
      email: 'support@cineparda.com',
      address: 'Cineparda Inc., 123 Entertainment Blvd, Los Angeles, CA 90001'
    }
  }
};

export default function HelpCenter() {
  const colors = {
    primary: "#f36f20",
    secondary: "#2c9ad4",
    background: "#FFFFFF",
    text: "#2A3747",
    textLight: "#7A8DA7",
    border: "#E1E5EB",
    surface: "#F8F9FA"
  };

  return (
    <div style={{ backgroundColor: colors.background }} className="min-h-screen">
      <Head>
        <title>{helpData.meta.title}</title>
        <meta name="description" content={helpData.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium" style={{ color: colors.primary }}>Support</span>
            <ChevronRightIcon className="h-4 w-4 mx-2" style={{ color: colors.textLight }} />
            <span className="text-sm" style={{ color: colors.textLight }}>Help Center</span>
          </div>
          
          <h1 style={{ color: colors.primary }} className="text-4xl font-bold mb-2">
            Help Center
          </h1>
          
          <p style={{ color: colors.textLight }} className="text-lg">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* FAQ Section */}
        <div style={{ color: colors.text }} className="space-y-12">
          <section>
            <h2 style={{ color: colors.secondary }} className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {helpData.faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                  <h3 className="font-medium text-lg mb-3">{faq.question}</h3>
                  {Array.isArray(faq.answer) ? (
                    <div className="space-y-2">
                      {faq.answer.map((paragraph, i) => (
                        <p key={i} className="text-base">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 style={{ color: colors.secondary }} className="text-2xl font-semibold mb-6">
              Contact Support
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                <h3 className="font-medium mb-3">Email</h3>
                <p className="text-base">{helpData.contact.email}</p>
                <p className="text-sm mt-2" style={{ color: colors.textLight }}>Typically responds within 24 hours</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                <h3 className="font-medium mb-3">Phone</h3>
                <p className="text-base">{helpData.contact.phone}</p>
                <p className="text-sm mt-2" style={{ color: colors.textLight }}>Support available {helpData.contact.hours}</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                <h3 className="font-medium mb-3">Live Chat</h3>
                <p className="text-base">Available in your account dashboard</p>
                <p className="text-sm mt-2" style={{ color: colors.textLight }}>Quickest response time</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}` }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p style={{ color: colors.textLight }} className="mb-2">
                {helpData.footer.text.replace('{year}', new Date().getFullYear().toString())}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2" style={{ color: colors.primary }}>Contact Support</h3>
              <p className="text-sm" style={{ color: colors.textLight }}>
                {helpData.footer.contact.email}
              </p>
              <p className="text-sm" style={{ color: colors.textLight }}>
                {helpData.footer.contact.address}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}