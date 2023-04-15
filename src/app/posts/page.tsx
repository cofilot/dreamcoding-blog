import React from 'react';

import { FilterablePosts } from '@/components/FilterablePosts';

import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
