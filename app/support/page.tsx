import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';
import SupportPage from '@/components/support/SupportPage';

export default function Support() {
  return (
    <div className="pt-16">
      <Suspense fallback={<LoadingUI />}>
        <SupportPage />
      </Suspense>
    </div>
  );
}