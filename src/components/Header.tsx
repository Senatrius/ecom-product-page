import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className='relative w-full'>
      <nav className=' mx-auto flex w-[87.2%] items-center border-border pt-4 pb-6 md:w-[77.1%] md:border-b md:p-0'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Open mobile menu'
          aria-expanded={isMenuOpen}
          type='button'
          className='z-10 mr-4 text-secondary-paragraph hover:text-primary-text focus:text-primary-text md:hidden'>
          {isMenuOpen ? (
            <svg
              width='16'
              height='15'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                fill='currentColor'
                fill-rule='evenodd'
              />
            </svg>
          ) : (
            <svg
              width='16'
              height='15'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
                fill='currentColor'
                fill-rule='evenodd'
              />
            </svg>
          )}
        </button>
        <img
          className='mr-4 md:mr-8 lg:mr-14'
          src='./logo.svg'
          alt='Sneakers company logo'
        />
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } fixed inset-0 bg-overlay md:hidden`}></div>
        <ul
          className={`text-m-nav md:text-d-nav ${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute top-0 left-0 z-[5] min-h-screen w-[66.6%] max-w-[20rem] flex-col bg-white pt-24 pb-12 pl-[6.9%] text-primary-text md:relative md:mr-4 md:flex md:min-h-0 md:max-w-full md:flex-row md:gap-5 md:p-0 md:text-secondary-paragraph lg:gap-8`}>
          <li>
            <a
              className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
              href='#'>
              Collections
            </a>
          </li>
          <li>
            <a
              className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
              href='#'>
              Men
            </a>
          </li>
          <li>
            <a
              className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
              href='#'>
              Women
            </a>
          </li>
          <li>
            <a
              className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
              href='#'>
              About
            </a>
          </li>
          <li>
            <a
              className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
              href='#'>
              Contact
            </a>
          </li>
        </ul>
        <button className='ml-auto text-secondary-paragraph hover:text-primary-text focus:text-primary-text'>
          <svg
            width='22'
            height='20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='currentColor'
              fill-rule='nonzero'
            />
          </svg>
        </button>
        <button className='ml-5 h-6 w-6 rounded-full border-2 border-white hover:border-primary-orange focus:border-primary-orange md:ml-8 md:h-12 md:w-11 lg:ml-12'>
          <img
            src='./images/image-avatar.png'
            alt='User profile photo'
          />
        </button>
      </nav>
    </header>
  );
};
