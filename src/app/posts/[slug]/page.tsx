import { getAllPosts, getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const postData = await getPostData(slug);

  return (
    <section>
      <h1>{postData.title}</h1>
      <pre>{postData.content}</pre>
    </section>
  );
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.path }));
};
