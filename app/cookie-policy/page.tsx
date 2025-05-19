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
      name: string;
      purpose: string;
      duration: string;
      examples?: string[];
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
    title: 'Cookie Policy | Cineparda',
    description: 'Information about how Cineparda uses cookies and similar technologies',
    lastUpdated: '2023-11-15',
    effectiveDate: '2023-11-15'
  },
  introduction: {
    heading: 'Our Use of Cookies and Similar Technologies',
    content: [
      'This Cookie Policy explains how Cineparda ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website or use our streaming platform.',
      'By using our services, you consent to the use of cookies as described in this policy unless you have disabled them in your browser settings.'
    ]
  },
  sections: [
    {
      title: '1. What Are Cookies',
      content: [
        'Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.',
        'Similar technologies include web beacons, pixels, and local storage that may be used to store or collect information about your use of our service.'
      ]
    },
    {
      title: '2. Types of Cookies We Use',
      content: 'We use several types of cookies for different purposes:',
      items: [
        {
          name: 'Essential Cookies',
          purpose: 'Required for the website to function properly and cannot be switched off',
          duration: 'Session or up to 24 months',
          examples: [
            'Authentication cookies to keep you logged in',
            'Load-balancing cookies for server management',
            'Session cookies for streaming functionality'
          ]
        },
        {
          name: 'Performance Cookies',
          purpose: 'Help us understand how visitors interact with our website',
          duration: 'Up to 24 months',
          examples: [
            'Google Analytics cookies',
            'Hotjar analytics cookies',
            'New Relic performance monitoring'
          ]
        },
        {
          name: 'Functional Cookies',
          purpose: 'Enable enhanced functionality and personalization',
          duration: 'Up to 12 months',
          examples: [
            'Language preference cookies',
            'Video quality preference cookies',
            'Closed captioning preferences'
          ]
        },
        {
          name: 'Advertising Cookies',
          purpose: 'Used to deliver relevant ads and measure ad performance',
          duration: 'Up to 12 months',
          examples: [
            'Facebook Pixel cookies',
            'Google Ads cookies',
            'Programmatic advertising cookies'
          ]
        }
      ]
    },
    {
        title: '3. Detailed Cookie Information',
        subsections: [
            {
                title: '3.1 First-Party Cookies',
                content: [
                    'These are cookies set by our website domain and are essential for:',
                ],
                items: [
                    'Maintaining user sessions',
                    'Remembering login state',
                    'Storing user preferences',
                    'Enabling video playback functionality'
                ]
            },
            {
                title: '3.2 Third-Party Cookies',
                content: [
                    'These are cookies set by domains other than ours, primarily for:',
                ],
                items: [
                    'Analytics and performance measurement',
                    'Advertising and retargeting',
                    'Social media integration',
                    'Content recommendation engines'
                ]
            }
        ],
        content: ''
    },
    {
      title: '4. Managing Your Cookie Preferences',
      content: [
        'You have several options to control or limit how we and our partners use cookies:',
      ],
      items: [
        {
          name: 'Browser Settings',
          purpose: 'Most browsers allow you to refuse or accept cookies',
          duration: 'Persistent until changed'
        },
        {
          name: 'Cookie Consent Tool',
          purpose: 'Use our cookie preference center to manage settings',
          duration: 'Persistent for 12 months'
        },
        {
          name: 'Advertising Opt-Outs',
          purpose: 'Opt out of personalized advertising through industry programs',
          duration: 'Persistent until cleared'
        }
      ],
      subsections: [
        {
          title: '4.1 Browser Instructions',
          content: 'How to manage cookies in popular browsers:',
          items: [
            'Google Chrome: Settings > Privacy and security > Cookies and other site data',
            'Safari: Preferences > Privacy > Manage Website Data',
            'Firefox: Options > Privacy & Security > Cookies and Site Data',
            'Microsoft Edge: Settings > Cookies and site permissions'
          ]
        },
        {
          title: '4.2 Mobile Devices',
          content: 'Managing cookies on mobile platforms:',
          items: [
            'iOS: Settings > Safari > Privacy & Security',
            'Android: Chrome menu > Settings > Site settings > Cookies'
          ]
        }
      ]
    },
    {
      title: '5. Changes to This Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.',
        'We will notify you of any material changes by posting the new policy on our website with a new effective date.'
      ]
    }
  ],
  footer: {
    text: '© {year} Cineparda. All rights reserved.',
    contact: {
      email: 'privacy@cineparda.com',
      address: 'Cineparda Inc., 123 Entertainment Blvd, Los Angeles, CA 90001'
    }
  }
};

export default function CookiePolicy() {
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
            <span className="text-sm" style={{ color: colors.textLight }}>Cookie Policy</span>
          </div>
          
          <h1 style={{ color: colors.primary }} className="text-4xl font-bold mb-2">
            Cookie Policy
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
                <div className="space-y-6 mb-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="font-medium text-lg" style={{ color: colors.primary }}>{item.name}</h3>
                        <span className="text-sm" style={{ color: colors.textLight }}>Duration: {item.duration}</span>
                      </div>
                      <p className="mb-3">{item.purpose}</p>
                      {item.examples && (
                        <>
                          <h4 className="text-sm font-medium mb-1">Examples:</h4>
                          <ul className="space-y-1 text-sm">
                            {item.examples.map((example, j) => (
                              <li key={j} className="flex">
                                <span className="mr-2" style={{ color: colors.textLight }}>•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
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
              <h3 className="text-sm font-medium mb-2" style={{ color: colors.primary }}>Privacy Questions</h3>
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