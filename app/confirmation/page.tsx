'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function EmailConfirmationContent() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('Verifying your email...');

    useEffect(() => {
        const confirmEmail = async () => {
            const confirmationToken = searchParams.get('confirmation');

            if (!confirmationToken) {
                setStatus('error');
                setMessage('Invalid confirmation link');
                return;
            }

            try {
                const response = await fetch(`/api/confirm-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ confirmation: confirmationToken })
                });

                if (response.ok) {
                    setStatus('success');
                    setMessage('Email verified successfully! You can now close this window.');

                    // Close window after 20 seconds
                    setTimeout(() => {
                        window.close();
                    }, 20000);
                } else {
                    const errorData = await response.json();
                    setStatus('error');
                    setMessage(errorData.message || 'Email verification failed');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Network error. Please try again later.');
            }
        };

        confirmEmail();
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#0A1A2F]/90 to-[#1A3A5F]/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full border border-[#2A4A6F]/50">
                {status === 'loading' && (
                    <div className="flex flex-col items-center">
                        <div className="relative w-20 h-20 mb-6">
                            <div className="absolute inset-0 rounded-full border-4 border-[#4A8BF5] border-t-transparent animate-spin"></div>
                            <div className="absolute inset-2 rounded-full border-4 border-[#4A8BF5] border-b-transparent animate-spin-reverse"></div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Verifying Your Email</h1>
                        <p className="text-[#A0B3C6]">{message}</p>
                        <div className="mt-6 w-full bg-[#1A3A5F] rounded-full h-1.5">
                            <div className="bg-[#4A8BF5] h-1.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
                        </div>
                    </div>
                )}

                {status === 'success' && (
                    <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 bg-[#4A8BF5] rounded-full opacity-20 animate-ping"></div>
                            <div className="absolute inset-2 bg-gradient-to-br from-[#4A8BF5] to-[#2A6BEF] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Verification Successful!</h1>
                        <p className="text-[#A0B3C6] mb-6 text-center">{message}</p>
                        <button
                            onClick={() => window.close()}
                            className="px-8 py-3 bg-gradient-to-r from-[#4A8BF5] to-[#2A6BEF] text-white rounded-full hover:from-[#3A7BE5] hover:to-[#1A5BD5] transition-all transform hover:scale-105 shadow-lg font-medium"
                        >
                            Close Now
                        </button>
                        <p className="text-sm text-[#6A8BA6] mt-4">This window will close automatically in 20 seconds</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 bg-[#FF4D4F] rounded-full opacity-20 animate-ping"></div>
                            <div className="absolute inset-2 bg-gradient-to-br from-[#FF4D4F] to-[#D9363E] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Verification Failed</h1>
                        <p className="text-[#A0B3C6] mb-6 text-center">{message}</p>
                        <div className="flex gap-4">
                            <a
                                href="/support"
                                className="px-6 py-2.5 bg-transparent text-[#4A8BF5] rounded-full hover:bg-[#1A3A5F] transition-colors border border-[#2A4A6F] font-medium"
                            >
                                Contact Support
                            </a>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2.5 bg-gradient-to-r from-[#4A8BF5] to-[#2A6BEF] text-white rounded-full hover:from-[#3A7BE5] hover:to-[#1A5BD5] transition-all font-medium"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function EmailConfirmationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        }>
            <EmailConfirmationContent />
        </Suspense>
    );
}