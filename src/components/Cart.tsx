import { CartContext } from '../App';
import { Button } from './Button';
import React, { SetStateAction, useContext } from 'react';

export const Cart = ({
  setIsCartOpen
}: {
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { products, setProducts } = useContext(CartContext);

  return (
    <>
      <button
        className='sr-only'
        onClick={() => setIsCartOpen(false)}>
        Close the cart modal
      </button>
      <div
        onClick={() => setIsCartOpen(false)}
        className='fixed inset-0 z-[25]'></div>
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
    </>
  );
};
