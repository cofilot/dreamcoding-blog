import Link from 'next/link';

import { getAllPosts } from '@/service/posts';

type Props = {
  children: React.ReactNode;
};

export default async function LayoutPage({ children }: Props) {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section>
      <header>
        <h2>Category</h2>
        <nav>
          <Link href={'/posts'}>{'All Posts'}</Link>
          {categories.map((category) => (
            <Link key={category} href={`/posts?category=${category}`}>
              {category}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </section>
  );
}
