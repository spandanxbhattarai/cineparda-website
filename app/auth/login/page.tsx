"use client";

import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingUI />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}