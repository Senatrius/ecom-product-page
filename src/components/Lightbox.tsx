import FocusTrap from 'focus-trap-react';
import { SetStateAction } from 'react';

export const Lightbox = ({
  imageId,
  setDisplayImage,
  prevImage,
  nextImage,
  setImage
}: {
  imageId: number;
  setDisplayImage: React.Dispatch<SetStateAction<boolean>>;
  prevImage: () => void;
  nextImage: () => void;
  setImage: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <FocusTrap>
      <section className='fixed inset-0 z-20 flex min-h-screen items-center overflow-auto bg-overlay p-12'>
        <div className='relative mx-auto flex max-w-[34.5rem] flex-col justify-center'>
          <button
            onClick={() => setDisplayImage(false)}
            aria-label='close lightbox'
            className='absolute right-0 top-0 -translate-y-12 text-white focus-within:text-primary-orange hover:text-primary-orange'>
            <svg
              width='14'
              height='15'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                fill='currentColor'
                fill-rule='evenodd'
              />
            </svg>
          </button>
          <div className='flex items-center justify-center'>
            <button
              aria-label='previous image'
              onClick={prevImage}
              className='absolute left-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white'>
              <svg
                width='12'
                height='18'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11 1 3 9l8 8'
                  stroke='currentColor'
                  stroke-width='3'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </button>
            <img
              className='h-auto rounded-2xl'
              src={`./images/image-product-${imageId}.jpg`}
              alt=''
            />
            <button
              aria-label='next image'
              onClick={nextImage}
              className='absolute right-0 flex h-14 w-14 translate-x-1/2 items-center justify-center rounded-full bg-white'>
              <svg
                width='13'
                height='18'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='m2 1 8 8-8 8'
                  stroke='currentColor'
                  stroke-width='3'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          <ul className='mx-auto mt-7 flex w-[82%] items-center justify-between gap-7'>
            <li>
              <button
                aria-label='image 1'
                onClick={() => setImage(1)}
                className={`${
                  imageId === 1 ? 'border-primary-orange' : 'border-white'
                } group box-border overflow-hidden rounded-lg border-2`}>
                <img
                  className={`${
                    imageId === 1 && 'opacity-50'
                  } group-focus-within:opacity-50 group-hover:opacity-50`}
                  src='./images/image-product-1-thumbnail.jpg'
                  alt=''
                />
              </button>
            </li>
            <li>
              <button
                aria-label='image 2'
                onClick={() => setImage(2)}
                className={`${
                  imageId === 2 ? 'border-primary-orange' : 'border-white'
                } group box-border overflow-hidden rounded-lg border-2`}>
                <img
                  className={`${
                    imageId === 2 && 'opacity-50'
                  } group-focus-within:opacity-50 group-hover:opacity-50`}
                  src='./images/image-product-2-thumbnail.jpg'
                  alt=''
                />
              </button>
            </li>
            <li>
              <button
                aria-label='image 3'
                onClick={() => setImage(3)}
                className={`${
                  imageId === 3 ? 'border-primary-orange' : 'border-white'
                } group box-border overflow-hidden rounded-lg border-2`}>
                <img
                  className={`${
                    imageId === 3 && 'opacity-50'
                  } group-focus-within:opacity-50 group-hover:opacity-50`}
                  src='./images/image-product-3-thumbnail.jpg'
                  alt=''
                />
              </button>
            </li>
            <li>
              <button
                aria-label='image 4'
                onClick={() => setImage(4)}
                className={`${
                  imageId === 4 ? 'border-primary-orange' : 'border-white'
                } group box-border overflow-hidden rounded-lg border-2`}>
                <img
                  className={`${
                    imageId === 4 && 'opacity-50'
                  } group-focus-within:opacity-50 group-hover:opacity-50`}
                  src='./images/image-product-4-thumbnail.jpg'
                  alt=''
                />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </FocusTrap>
  );
};
