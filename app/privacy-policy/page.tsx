import Head from 'next/head';
import privacyPolicyData from '../../data/privacyPolicy.json';
export interface PrivacyPolicyData {
    meta: {
        title: string;
        description: string;
        lastUpdated: string;
    };
    sections: Section[];
    footer: {
        text: string;
    };
}

export interface Section {
    title: string;
    content?: string | string[];
    subsections?: Subsection[];
    columns?: Column[];
    items?: string[];
    contactInfo?: ContactInfo;
    additionalContent?: string;
}

export interface Subsection {
    title: string;
    content?: string;
    type?: string;
    items?: string[];
}

export interface Column {
    title: string;
    items: string[];
}

export interface ContactInfo {
    email: string;
    mail: string;
    responseTime: string;
}

export interface Colors {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textLight: string;
    border: string;
}

interface SectionProps {
    section: Section;
    colors: Colors;
}

// Type assertion for the imported JSON data
const policyData: PrivacyPolicyData = privacyPolicyData as PrivacyPolicyData;

export default function PrivacyPolicy() {
    // Color scheme with TypeScript type
    const colors: Colors = {
        primary: "#f36f20",
        secondary: "#2c9ad4",
        background: "#FFFFFF",
        text: "#2A3747",
        textLight: "#7A8DA7",
        border: "#E1E5EB",
    };

    // Format date
    const lastUpdated = new Date(policyData.meta.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div
            className="min-h-screen transition-colors duration-300"
            style={{ backgroundColor: colors.background }}
        >
            <Head>
                <title>{policyData.meta.title}</title>
                <meta name="description" content={policyData.meta.description} />
            </Head>

            {/* Main Content - Full Width */}
            <main className="w-full px-4 py-24 md:px-8 lg:px-16">
                {/* Title Section */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h1
                        className="text-4xl font-bold mb-4"
                        style={{ color: colors.primary }}
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {/* Policy Content */}
                <div className="max-w-6xl mx-auto space-y-12" style={{ color: colors.text }}>
                    {policyData.sections.map((section, index) => (
                        <Section
                            key={index}
                            section={section}
                            colors={colors}
                        />
                    ))}
                </div>
            </main>

         
        </div>
    );
}

// Reusable Section Component with proper typing
function Section({ section, colors }: SectionProps) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>
                {section.title}
            </h2>

            {/* Render content based on section type */}
            {section.content && Array.isArray(section.content) ? (
                <div className="space-y-4 text-base leading-relaxed">
                    {section.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            ) : section.content && (
                <p className="text-base leading-relaxed mb-4">{section.content}</p>
            )}

            {/* Render subsections if they exist */}
            {section.subsections && (
                <div className="space-y-6 mt-6">
                    {section.subsections.map((subsection, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-medium mb-2" style={{ color: colors.primary }}>
                                {subsection.title}
                            </h3>
                            {subsection.content && <p className="mb-2">{subsection.content}</p>}
                            {subsection.items && (
                                <ul className="list-disc pl-6 space-y-2 text-base">
                                    {subsection.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Render columns if they exist */}
            {section.columns && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {section.columns.map((column, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-lg"
                            style={{
                                backgroundColor: '#F8F9FA',
                                border: `1px solid ${colors.border}`
                            }}
                        >
                            <h3 className="font-medium mb-2">{column.title}</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {column.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Render simple list if items exist */}
            {section.items && !section.columns && (
                <ul className="list-disc pl-6 space-y-2 mt-4 text-base">
                    {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}

            {/* Render contact info if it exists */}
            {section.contactInfo && (
                <div className="mt-4 p-4 rounded-lg" style={{
                    backgroundColor: '#F8F9FA',
                    border: `1px solid ${colors.border}`
                }}>
                    <p><strong style={{ color: colors.primary }}>Email:</strong> {section.contactInfo.email}</p>
                    <p className="mt-2"><strong style={{ color: colors.primary }}>Mail:</strong> {section.contactInfo.mail}</p>
                    <p className="mt-2"><strong style={{ color: colors.primary }}>Response Time:</strong> {section.contactInfo.responseTime}</p>
                </div>
            )}

            {/* Render additional content if it exists */}
            {section.additionalContent && (
                <p className="mt-6 text-base leading-relaxed">
                    {section.additionalContent}
                </p>
            )}
        </section>
    );
}