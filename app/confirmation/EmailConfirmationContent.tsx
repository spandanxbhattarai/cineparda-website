'use client';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function EmailConfirmationContent() {
    useEffect(() => {
        // Trigger confetti animation
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Confetti from left
            confetti({
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
                particleCount,
                origin: { x: 0, y: 0.7 },
                colors: ['#4A8BF5', '#2A6BEF', '#1A5BD5', '#0A4BC5']
            });

            // Confetti from right
            confetti({
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
                particleCount,
                origin: { x: 1, y: 0.7 },
                colors: ['#4A8BF5', '#2A6BEF', '#1A5BD5', '#0A4BC5']
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0A1A2F] to-[#1A3A5F] flex items-center justify-center p-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl transform transition-all duration-700 ease-out animate-fade-scale">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-8 relative animate-float">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4A8BF5] to-[#2A6BEF] rounded-full opacity-20 animate-pulse-slow"></div>
                            <div className="w-full h-full bg-gradient-to-br from-[#4A8BF5] to-[#2A6BEF] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 animate-fade-scale">
                                <svg className="w-8 h-8 text-white transform transition-all duration-500 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animate-glow">
                            Congratulations!
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-[#4A8BF5] mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Email Verified
                        </h2>

                        <div className="space-y-4 text-center">
                            <p className="text-lg md:text-xl text-[#A0B3C6] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Your account has been successfully verified
                            </p>

                            <p className="text-base md:text-lg text-[#A0B3C6]/80 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                You can now close this tab and log in to your account
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 