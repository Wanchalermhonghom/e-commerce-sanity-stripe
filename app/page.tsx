import { client } from '@/sanity/lib/client';
import Image from 'next/image'

export default async function Home() {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     {JSON.stringify(products)}
    </main>
  )
}
