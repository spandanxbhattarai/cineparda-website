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
    title: 'Terms of Service | Cineparda',
    description: 'Legal terms governing your use of Cineparda streaming platform',
    lastUpdated: '2023-11-15',
    effectiveDate: '2023-11-15'
  },
  introduction: {
    heading: 'Welcome to Cineparda',
    content: [
      'These Terms of Service ("Terms") govern your access to and use of the Cineparda streaming platform ("Service"). Please read these Terms carefully before using our Service.',
      'By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these Terms, you may not access the Service.'
    ]
  },
  sections: [
    {
      title: '1. Account Registration and Security',
      content: [
        'To access certain features of the Service, you must register for an account. When registering, you agree to:',
      ],
      items: [
        {
          text: 'Provide accurate, current, and complete information',
          subitems: [
            'Your full legal name',
            'Valid email address',
            'Other requested information'
          ]
        },
        {
          text: 'Maintain the security of your account credentials',
          subitems: [
            'Do not share your password',
            'Notify us immediately of any unauthorized access'
          ]
        },
        {
          text: 'Be responsible for all activities that occur under your account'
        }
      ]
    },
    {
      title: '2. Subscription and Payment Terms',
      content: 'Cineparda offers various subscription plans with different features and pricing:',
      subsections: [
        {
          title: '2.1 Subscription Plans',
          content: [
            'Monthly and annual subscription options are available',
            'Premium plans may include additional features like 4K streaming and multiple simultaneous streams'
          ]
        },
        {
          title: '2.2 Billing and Renewal',
          content: [
            'Subscriptions automatically renew at the end of each billing cycle',
            'We will charge your payment method on file unless you cancel before the renewal date'
          ],
          items: [
            'Monthly plans renew every 30 days',
            'Annual plans renew every 365 days'
          ]
        },
        {
          title: '2.3 Cancellation Policy',
          content: 'You may cancel your subscription at any time through your account settings.'
        },
        {
          title: '2.4 Free Trials',
          content: [
            'We may offer free trial periods for new subscribers',
            'Your payment method will be charged unless you cancel before the trial ends'
          ]
        }
      ]
    },
    {
      title: '3. Acceptable Use Policy',
      content: 'You agree not to engage in any of the following prohibited activities:',
      items: [
        {
          text: 'Attempting to circumvent any content protection measures'
        },
        {
          text: 'Using the Service for any illegal purpose or in violation of laws'
        },
        {
          text: 'Modifying, adapting, or hacking the Service'
        },
        {
          text: 'Distributing copyrighted content without authorization'
        },
        {
          text: 'Sharing your account credentials with others'
        }
      ]
    },
    {
      title: '4. Intellectual Property Rights',
      content: [
        'All content available through the Service, including movies, TV shows, artwork, and logos, is the property of Cineparda or its licensors and is protected by copyright and other intellectual property laws.',
        'Your subscription grants you a limited, non-exclusive, non-transferable license to access and view the content for personal, non-commercial use.'
      ],
      subsections: [
        {
          title: '4.1 Restrictions',
          content: 'You may not:',
          items: [
            'Reproduce, distribute, or publicly perform any content',
            'Create derivative works based on our content',
            'Use any content for commercial purposes'
          ]
        }
      ]
    },
    {
      title: '5. Termination',
      content: [
        'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.',
        'Upon termination, your right to use the Service will immediately cease.'
      ]
    },
    {
      title: '6. Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, Cineparda shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.',
        'Our total liability for any claims under these Terms shall not exceed the amount you paid us in the last six months.'
      ]
    },
    {
      title: '7. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.'
    },
    {
      title: '8. Changes to Terms',
      content: [
        'We reserve the right to modify these Terms at any time. We will provide notice of material changes through our website or via email.',
        'Your continued use of the Service after such modifications constitutes your acceptance of the new Terms.'
      ]
    }
  ],
  footer: {
    text: '© {year} Cineparda. All rights reserved.',
    contact: {
      email: 'legal@cineparda.com',
      address: 'Cineparda Inc., 123 Entertainment Blvd, Los Angeles, CA 90001'
    }
  }
};

export default function TermsOfService() {
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

      <main className="container mx-auto px-4 py-24 max-w-4xl ">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium" style={{ color: colors.primary }}>Legal</span>
            <ChevronRightIcon className="h-4 w-4 mx-2" style={{ color: colors.textLight }} />
            <span className="text-sm" style={{ color: colors.textLight }}>Terms of Service</span>
          </div>
          
          <h1 style={{ color: colors.primary }} className="text-4xl font-bold mb-2">
            Terms of Service
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

     
    </div>
  );
}