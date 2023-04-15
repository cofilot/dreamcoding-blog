import React from 'react';

import { FilterablePosts } from '@/components/FilterablePosts';

import { getAllPosts } from '@/service/posts';

type Props = {
  searchParams: { category: string | undefined };
};

export default async function PostsPage({ searchParams: { category } }: Props) {
  const posts = await getAllPosts();

  return (
    <section>
      <FilterablePosts posts={posts} category={category} />
    </section>
  );
}
