import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

type BannerProps = {
  title: string;
  subtitle: string;
  backgroundImage: any;
};

function Banner(props: BannerProps) {
  return (
    <section className="h-96 w-screen relative p-36">
      <Image
        className="z-[-100]"
        src={urlForImage(props.backgroundImage).url()}
        alt="bannerImage"
        fill={true}
      ></Image>
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <p className="text-xl mt-4">{props.subtitle}</p>
    </section>
  );
}

export default Banner;
