import { getFeaturedPosts } from '@/service/posts';

import PostsGrid from './PostsGrid';

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  return (
    <section className='space-y-4 p-4'>
      <h2 className='font-bold'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
