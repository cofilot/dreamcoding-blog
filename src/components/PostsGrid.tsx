import { Post } from '@/service/posts';

import { PostCard } from './PostCard';

type Props = {
  posts: ReadonlyArray<Post>;
};

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{<PostCard post={post} />}</li>
      ))}
    </ul>
  );
};

export default PostsGrid;
