import Image from 'next/image';

import { Post } from '@/service/posts';

type Props = {
  posts: ReadonlyArray<Post>;
};

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(({ path, date, title, description, category }) => (
        <li key={path}>
          <Image
            src={`/images/posts/${path}.png`}
            alt={title}
            width={380}
            height={210}
          />
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{category}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
