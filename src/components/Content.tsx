import { AddToCart } from './AddToCart';

export const Content = () => {
  return (
    <section className='mx-auto w-[87.2%] md:w-auto'>
      <p className='my-6 whitespace-nowrap text-m-subheading uppercase text-primary-orange md:mb-3 md:mt-[2.5rem] md:text-d-subheading lg:mt-[3.75rem]'>
        Sneaker company
      </p>
      <h1 className='mb-5 text-m-heading capitalize text-primary-text md:mb-8 md:text-d-heading'>
        Fall limited edition sneakers
      </h1>
      <p className='text-m-paragraph text-secondary-paragraph md:text-d-paragraph'>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='my-7 flex items-center justify-between md:mb-10 md:flex-col md:items-start'>
        <div className='flex items-center gap-4'>
          <p className='text-price text-primary-text'>$125.00</p>
          <span className='inline-block rounded-md bg-secondary-discount px-2 py-1 text-discount-unit text-primary-orange'>
            50%
          </span>
        </div>
        <p className='text-discount-unit text-secondary-crossed line-through'>
          $250.00
        </p>
      </div>
      <AddToCart />
    </section>
  );
};
