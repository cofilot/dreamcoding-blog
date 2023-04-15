import { Post } from '@/service/posts';

import PostsGrid from './PostsGrid';

type Props = {
  posts: Post[];
  category?: string | undefined;
};

export const FilterablePosts = ({ posts, category }: Props) => {
  const filteredPosts = category?.length
    ? posts.filter((post) => post.category === category)
    : posts;

  return (
    <section>
      <PostsGrid posts={filteredPosts} />
    </section>
  );
};
