import Image from 'next/image';
import Link from 'next/link';

import profileImage from 'public/images/profile.png';

export const Hero: React.FC = () => (
  <section className='flex flex-col items-center py-4'>
    <Image
      src={profileImage}
      alt='Picture of the author'
      width={200}
      height={200}
      priority
      className='rounded-full'
    />
    <h2 className='mt-4 font-bold'>{"Hi, I'm Ellie"}</h2>
    <h3 className='mt-2 font-semibold'>{'Full-stack Engineer'}</h3>
    <p className='mt-4'>{'꿈을 코딩하는 사람, 드림코더 엘리'}</p>
    <Link href='/contact'>
      <button className='font-bol mt-4 rounded-xl bg-pink-100 p-2'>
        {'Contact Me'}
      </button>
    </Link>
  </section>
);
