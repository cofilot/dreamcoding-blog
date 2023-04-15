import { getAllPosts } from '@/service/posts';

import { MultiCarousel } from './MultiCarousel';
import { PostCard } from './PostCard';

export const CarouselPosts = async () => {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};
