import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/service/posts';

type Props = {
  post: Post;
};

export const PostCard: React.FC<Props> = ({
  post: { path, date, title, description, category },
}) => {
  return (
    <Link href={`posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
};
