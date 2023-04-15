import FeaturedPosts from '@/components/FeaturedPosts';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <section>
      <Hero />
      {/* https://beta.nextjs.org/docs/configuring/typescript#async-server-component-typescript-error */}
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </section>
  );
}
