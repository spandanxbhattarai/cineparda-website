'use client';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function ResetPasswordContent() {
    const searchParams = useSearchParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: '',
        general: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const validatePassword = (value: string) => {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!strongRegex.test(value)) {
            return 'Password must contain: uppercase, lowercase, number, and special character';
        }
        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const passwordError = validatePassword(password);
        const confirmError = password !== confirmPassword ? 'Passwords do not match' : '';
        
        setErrors({
            password: passwordError,
            confirmPassword: confirmError,
            general: ''
        });

        // Check for any validation errors
        if (passwordError || confirmError) {
            setStatus('error');
            setMessage('Please fix the errors below');
            return;
        }

        const confirmationCode = searchParams.get('confirmation');
        if (!confirmationCode) {
            setStatus('error');
            setMessage('Invalid confirmation link');
            setErrors({
                ...errors,
                general: 'Invalid confirmation link'
            });
            return;
        }

        setStatus('loading');
        setMessage('Resetting your password...');

        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    confirmation: confirmationCode,
                    newPassword: password,
                    confirmPassword: confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Password reset failed');
            }

            setStatus('success');
            setMessage('Password reset successfully! This window will close automatically.');

            // Close window after 20 seconds
            setTimeout(() => {
                window.close();
            }, 20000);

        } catch (error) {
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    };

    const getPasswordStrength = (password: string) => {
        if (!password) return 0;
        let strength = 0;
        
        // Length contributes up to 40%
        strength += Math.min(password.length / 20, 0.4);
        
        // Character variety contributes up to 60%
        const tests = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
        strength += tests.filter(re => re.test(password)).length * 0.15;
        
        return Math.min(strength * 100, 100);
    };

    const strength = getPasswordStrength(password);
    const strengthColor = strength < 40 ? 'bg-red-500' :
        strength < 70 ? 'bg-yellow-500' : 'bg-green-500';

    // Check if there are any errors to display at the top
    const hasErrors = errors.password || errors.confirmPassword || errors.general || (status === 'error' && message);

    return (
        <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center p-4 font-lato">
            <div className="bg-gradient-to-br from-[#0A1A2F]/90 to-[#1A3A5F]/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full border border-[#2A4A6F]/50">
                {status === 'success' ? (
                    <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-6">
                            <div className="absolute inset-0 bg-[#4A8BF5] rounded-full opacity-20 animate-ping"></div>
                            <div className="absolute inset-2 bg-gradient-to-br from-[#4A8BF5] to-[#2A6BEF] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Password Reset Successful!</h1>
                        <p className="text-[#A0B3C6] mb-6 text-center">{message}</p>
                        <button
                            onClick={() => window.close()}
                            className="px-8 py-3 bg-gradient-to-r from-[#4A8BF5] to-[#2A6BEF] text-white rounded-full hover:from-[#3A7BE5] hover:to-[#1A5BD5] transition-all transform hover:scale-105 shadow-lg font-medium"
                        >
                            Close Now
                        </button>
                        <p className="text-sm text-[#6A8BA6] mt-4">This window will close automatically in 20 seconds</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-white mb-2">Reset Your Password</h1>
                            <p className="text-[#A0B3C6]">Create a new secure password</p>
                        </div>

                        {(hasErrors) && (
                            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                                <h3 className="font-medium mb-1">Please fix the following:</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    {errors.general && <li>{errors.general}</li>}
                                    {errors.password && <li>{errors.password}</li>}
                                    {errors.confirmPassword && <li>{errors.confirmPassword}</li>}
                                    {(status === 'error' && message && !errors.general) && <li>{message}</li>}
                                </ul>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-[#A0B3C6] mb-2">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full px-4 py-3 bg-[#1A3A5F]/50 border ${errors.password ? 'border-red-500' : 'border-[#2A4A6F]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4A8BF5] focus:border-transparent`}
                                    placeholder="Enter new password"
                                />
                                <div className="mt-2">
                                    <div className="w-full bg-[#1A3A5F] rounded-full h-1.5">
                                        <div
                                            className={`h-1.5 rounded-full ${strengthColor}`}
                                            style={{ width: `${strength}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-[#6A8BA6] mt-1">
                                        <span>Weak</span>
                                        <span>Medium</span>
                                        <span>Strong</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#A0B3C6] mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full px-4 py-3 bg-[#1A3A5F]/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-[#2A4A6F]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#4A8BF5] focus:border-transparent`}
                                    placeholder="Confirm new password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-6 py-3 bg-gradient-to-r from-[#4A8BF5] to-[#2A6BEF] text-white rounded-lg hover:from-[#3A7BE5] hover:to-[#1A5BD5] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : 'Reset Password'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#0A1A2F] flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        }>
            <ResetPasswordContent />
        </Suspense>
    );
}