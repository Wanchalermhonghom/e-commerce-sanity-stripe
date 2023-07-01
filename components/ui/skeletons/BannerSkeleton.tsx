import { Skeleton } from '../skeleton';

export default function BannerSkeleton() {
  return (
    <Skeleton className="h-96 w-screen relative p-36 bg-gray-200">
      <Skeleton className="text-4xl font-bold text-white"></Skeleton>
      <Skeleton className="text-xl mt-4"></Skeleton>
    </Skeleton>
  );
}
