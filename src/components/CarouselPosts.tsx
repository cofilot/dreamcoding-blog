import { getAllPosts } from '@/service/posts';

import { MultiCarousel } from './MultiCarousel';
import { PostCard } from './PostCard';

export const CarouselPosts = async () => {
  const posts = await getAllPosts();
  return (
    <section className='space-y-4 p-4'>
      <h2 className='font-bold'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};
