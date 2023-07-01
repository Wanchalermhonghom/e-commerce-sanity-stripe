import { Card, CardContent, CardFooter, CardHeader } from '../card';
import { Skeleton } from '../skeleton';

function ProductListingSkeleton() {
  return (
    <section className="p-24 flex flex-col gap-4 w-full ">
      <div className="flex flex-wrap gap-4 h-96">
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
        <Card className="w-[267px]">
          <Skeleton className="w-[267px] h-[334px] bg-slate-100" />
          <CardHeader>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
            <Skeleton className="w-[217px] h-[20px] bg-slate-100"></Skeleton>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="w-[82px] h-[24px] bg-slate-100" />
            <Skeleton className="w-[105px] h-[40px] bg-slate-100"></Skeleton>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default ProductListingSkeleton;
