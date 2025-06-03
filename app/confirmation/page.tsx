'use client';
import dynamic from 'next/dynamic';

const EmailConfirmationContent = dynamic(
    () => import('./EmailConfirmationContent'),
    { ssr: false }
);

export default function EmailConfirmationPage() {
    return <EmailConfirmationContent />;
}