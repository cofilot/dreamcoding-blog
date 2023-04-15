import { getAllPosts } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  return <div>{slug}</div>;
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.path }));
};
