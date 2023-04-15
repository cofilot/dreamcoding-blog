'use client';

import { useState } from 'react';

import { Post } from '@/service/posts';

import Categories from './Categories';
import PostsGrid from './PostsGrid';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState<string>(ALL_POSTS);
  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className='flex justify-center space-x-8'>
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};
