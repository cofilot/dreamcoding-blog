import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured?: boolean | undefined;
};

export type PostData = Post & { content: string };

export const getAllPosts = (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date < b.date ? 1 : -1)));
};

export const getFeaturedPosts = (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
};

export const getNonFeaturedPosts = (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
};

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata) throw new Error(`The post(${fileName}) is not founded.`);
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
};
