import clsx from 'clsx';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Categories: React.FC<Props> = ({ categories, selected, onClick }) => {
  return (
    <section>
      <h2
        className={clsx(
          'text-center font-bold',
          'after:my-2 after:block after:h-[1px] after:w-full after:bg-pink-400'
        )}
      >
        Category
      </h2>
      <ul className='flex flex-col space-y-1'>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => {
              onClick(category);
            }}
            className={clsx(
              'cursor-pointer rounded-sm px-2 py-1 text-center',
              'hover:bg-pink-400 hover:text-pink-50',
              category === selected && 'bg-pink-400 text-pink-50'
            )}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
