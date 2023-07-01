import { urlForImage } from '@/sanity/lib/image';
import { fetchBanner } from '@/services/product-service';
import Image from 'next/image';

async function Banner() {
  const bannerResponse = await fetchBanner();
  const banner = bannerResponse[0];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="h-96 w-screen relative p-36">
      <Image
        className="z-[-100]"
        src={urlForImage(banner.backgroundImage).url()}
        alt="bannerImage"
        fill={true}
      ></Image>
      <h1 className="text-4xl font-bold">{banner.title}</h1>
      <p className="text-xl mt-4">{banner.subtitle}</p>
    </section>
  );
}

export default Banner;
