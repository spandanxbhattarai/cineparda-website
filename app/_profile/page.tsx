import { Suspense } from 'react';
import LoadingUI from '@/components/ui/loading-ui';
import ProfilePage from '@/components/profile/ProfilePage';

export default function Profile() {
  return (
    <div className="pt-16">
      <Suspense fallback={<LoadingUI />}>
        <ProfilePage />
      </Suspense>
    </div>
  );
}