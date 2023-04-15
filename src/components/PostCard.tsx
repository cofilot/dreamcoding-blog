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
      <article className='shadow-lg'>
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{date.toString()}</time>
          <h3 className='mt-4 font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='mt-4 rounded-lg bg-pink-400 px-2 py-1 text-sm text-pink-50'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
};
