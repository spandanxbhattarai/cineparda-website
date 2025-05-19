import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';
import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingUI />}>
        <SignupForm />
      </Suspense>
    </div>
  );
}