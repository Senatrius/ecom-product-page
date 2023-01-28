import { useContext, useState } from 'react';
import { CartContext } from '../App';
import { Button } from './Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { products, setProducts } = useContext(CartContext);

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
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
            (link, idx) => (
              <li key={idx}>
                <a
                  className='inline-block w-full border-primary-orange py-[0.625rem] hover:border-r-4 focus:border-r-4 md:border-none md:pt-10 md:pb-12 md:hover:shadow-underline md:focus:shadow-underline '
                  href='#'>
                  {link}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          aria-label={`Open cart modal - ${products} items`}
          aria-expanded={isCartOpen}
          onClick={() => setIsCartOpen(!isCartOpen)}
          className='relative ml-auto text-secondary-paragraph hover:text-primary-text focus:text-primary-text'>
          {products > 0 && (
            <span className='absolute -translate-y-1/2 rounded-full bg-primary-orange px-2 text-cart-count text-white'>
              {products}
            </span>
          )}
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
      {isCartOpen && (
        <div className='absolute right-[2%] z-30 mt-2 w-[96%] max-w-[22.5rem] rounded-lg bg-white shadow-xl lg:right-[6.25%]'>
          <header className='border-b border-border px-6 pt-5 pb-7 text-cart-label'>
            Cart
          </header>
          <div
            aria-live='polite'
            className='flex min-h-[11.75rem] flex-col justify-center px-6 pt-6 pb-8'>
            {products === 0 ? (
              <span className='text-center text-cart-label'>
                Your cart is empty
              </span>
            ) : (
              <>
                <div className='mb-[1.625rem] flex items-center gap-4'>
                  <img
                    className='w-[3.125rem] rounded-[0.25rem]'
                    src='./images/image-product-1-thumbnail.jpg'
                    alt=''
                  />
                  <div className='flex flex-col'>
                    <p className='text-cart-item'>
                      Fall Limited Edition Sneakers
                    </p>
                    <p className='text-cart-item'>
                      {`$125.00 x ${products}`}
                      <span className='ml-1.5 text-cart-label'>
                        ${(125.0 * products).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => setProducts(0)}
                    aria-label='remove item from cart'
                    className='ml-auto text-secondary-crossed hover:text-primary-text focus:text-primary-text'>
                    <svg
                      width='14'
                      height='16'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
                <Button>Checkout</Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
