import Head from 'next/head';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type PolicyData = {
  meta: {
    title: string;
    description: string;
    lastUpdated: string;
    effectiveDate: string;
  };
  introduction: {
    heading: string;
    content: string[];
  };
  sections: {
    title: string;
    content: string | string[];
    items?: {
      text: string;
      subitems?: string[];
    }[];
    subsections?: {
      title: string;
      content: string | string[];
      items?: string[];
    }[];
  }[];
  footer: {
    text: string;
    contact: {
      email: string;
      address: string;
    };
  };
};

const policyData: PolicyData = {
  meta: {
    title: 'Refund Policy | Cineparda',
    description: 'Our policy regarding refunds and cancellations for Cineparda streaming service',
    lastUpdated: '2023-11-15',
    effectiveDate: '2023-11-15'
  },
  introduction: {
    heading: 'Cineparda Refund Policy',
    content: [
      'This Refund Policy outlines the circumstances under which Cineparda provides refunds, how to request a refund, and our general policies regarding payments and cancellations.',
      'By subscribing to our service, you agree to this Refund Policy in addition to our Terms of Service and Privacy Policy.'
    ]
  },
  sections: [
    {
      title: '1. General Refund Policy',
      content: 'Cineparda offers refunds under the following circumstances:',
      items: [
        {
          text: 'Duplicate charges',
          subitems: [
            'Multiple charges for the same billing period',
            'Identical charges within a short timeframe'
          ]
        },
        {
          text: 'Unauthorized transactions',
          subitems: [
            'Charges not authorized by the account holder',
            'Fraudulent activity on your account'
          ]
        },
        {
          text: 'Service issues',
          subitems: [
            'Extended outages (more than 24 hours)',
            'Persistent technical problems we cannot resolve'
          ]
        }
      ]
    },
    {
      title: '2. Subscription Cancellations',
      content: [
        'You may cancel your Cineparda subscription at any time through your account settings.',
        'Cancellation will take effect at the end of your current billing period.'
      ],
      subsections: [
        {
          title: '2.1 Monthly Subscriptions',
          content: 'Monthly subscriptions will remain active until the end of the current 30-day billing cycle.'
        },
        {
          title: '2.2 Annual Subscriptions',
          content: [
            'Annual subscriptions will remain active until the end of the current 365-day billing cycle.',
            'Partial refunds may be available for annual plans cancelled within the first 30 days.'
          ]
        }
      ]
    },
    {
      title: '3. Non-Refundable Situations',
      content: 'We typically do not provide refunds in these cases:',
      items: [
        {
          text: 'Change of mind after subscription'
        },
        {
          text: 'Partial month usage'
        },
        {
          text: 'Failure to cancel before free trial ends'
        },
        {
          text: 'Third-party issues (ISP problems, device compatibility)'
        }
      ]
    },
    {
      title: '4. Refund Request Process',
      content: 'To request a refund, please follow these steps:',
      items: [
        {
          text: 'Contact our support team within 14 days of the charge'
        },
        {
          text: 'Provide the following information:',
          subitems: [
            'Your account email',
            'Date and amount of charge',
            'Reason for refund request'
          ]
        },
        {
          text: 'Allow 3-5 business days for review'
        }
      ]
    },
    {
      title: '5. Refund Processing',
      content: [
        'Approved refunds will be processed within 5-7 business days.',
        'Refunds will be issued to the original payment method.'
      ],
      subsections: [
        {
          title: '5.1 Processing Times',
          content: [
            'Credit cards: 3-10 business days',
            'PayPal: Typically within 24 hours',
            'App Store/Google Play: Subject to platform policies'
          ]
        }
      ]
    },
    {
      title: '6. Disputed Charges',
      content: 'Please contact our support team before disputing charges with your payment provider, as chargebacks may result in immediate account termination.'
    },
    {
      title: '7. Policy Changes',
      content: 'We may update this Refund Policy from time to time. The updated version will be indicated by the "Last Updated" date at the top of this page.'
    }
  ],
  footer: {
    text: '© {year} Cineparda. All rights reserved.',
    contact: {
      email: 'support@cineparda.com',
      address: 'Cineparda Inc., 123 Entertainment Blvd, Los Angeles, CA 90001'
    }
  }
};

export default function RefundPolicy() {
  const colors = {
    primary: "#f36f20",
    secondary: "#2c9ad4",
    background: "#FFFFFF",
    text: "#2A3747",
    textLight: "#7A8DA7",
    border: "#E1E5EB",
    surface: "#F8F9FA"
  };

  const lastUpdated = new Date(policyData.meta.lastUpdated).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const effectiveDate = new Date(policyData.meta.effectiveDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div style={{ backgroundColor: colors.background }} className="min-h-screen">
      <Head>
        <title>{policyData.meta.title}</title>
        <meta name="description" content={policyData.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium" style={{ color: colors.primary }}>Legal</span>
            <ChevronRightIcon className="h-4 w-4 mx-2" style={{ color: colors.textLight }} />
            <span className="text-sm" style={{ color: colors.textLight }}>Refund Policy</span>
          </div>
          
          <h1 style={{ color: colors.primary }} className="text-4xl font-bold mb-2">
            Refund Policy
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: colors.textLight }}>
            <div>
              <span className="font-medium">Last Updated:</span> {lastUpdated}
            </div>
            <div>
              <span className="font-medium">Effective:</span> {effectiveDate}
            </div>
          </div>
        </div>

        

        {/* Introduction */}
        <div className="mb-12 p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>
            {policyData.introduction.heading}
          </h2>
          <div className="space-y-4">
            {policyData.introduction.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-black">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ color: colors.text }} className="space-y-12">
          {policyData.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20" id={`section-${index}`}>
              <h2 style={{ color: colors.secondary }} className="text-2xl font-semibold mb-4">
                {section.title}
              </h2>
              
              {/* Main Content */}
              {Array.isArray(section.content) ? (
                <div className="space-y-4 mb-4">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-relaxed mb-4">{section.content}</p>
              )}

              {/* Items List */}
              {section.items && (
                <ul className="space-y-3 mb-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2" style={{ color: colors.primary }}>•</span>
                      <div>
                        <span className="text-base">{item.text}</span>
                        {item.subitems && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {item.subitems.map((subitem, j) => (
                              <li key={j} className="flex items-start">
                                <span className="mr-2" style={{ color: colors.textLight }}>–</span>
                                <span className="text-base">{subitem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.map((subsection, i) => (
                <div key={i} className="mt-6">
                  <h3 style={{ color: colors.primary }} className="text-xl font-medium mb-3">
                    {subsection.title}
                  </h3>
                  
                  {Array.isArray(subsection.content) ? (
                    <div className="space-y-3 mb-3">
                      {subsection.content.map((paragraph, j) => (
                        <p key={j} className="text-base leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base leading-relaxed mb-3">{subsection.content}</p>
                  )}
                  
                  {subsection.items && (
                    <ul className="space-y-2 ml-4">
                      {subsection.items.map((item, j) => (
                        <li key={j} className="flex">
                          <span className="mr-2" style={{ color: colors.textLight }}>•</span>
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${colors.border}` }} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p style={{ color: colors.textLight }} className="mb-2">
                {policyData.footer.text.replace('{year}', new Date().getFullYear().toString())}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2" style={{ color: colors.primary }}>Contact Support</h3>
              <p className="text-sm" style={{ color: colors.textLight }}>
                {policyData.footer.contact.email}
              </p>
              <p className="text-sm" style={{ color: colors.textLight }}>
                {policyData.footer.contact.address}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}