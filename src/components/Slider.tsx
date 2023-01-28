import { useState } from 'react';
import { Lightbox } from './Lightbox';

export const Slider = () => {
  const [image, setImage] = useState<number>(1);
  const [displayImage, setDisplayImage] = useState<boolean>(false);

  const nextImage = () => {
    if (image + 1 > 4) {
      setImage(1);
      return;
    }

    setImage(image + 1);
  };

  const prevImage = () => {
    if (image - 1 < 1) {
      setImage(4);
      return;
    }

    setImage(image - 1);
  };

  return (
    <>
      {displayImage && (
        <Lightbox
          setImage={setImage}
          imageId={image}
          setDisplayImage={setDisplayImage}
          prevImage={prevImage}
          nextImage={nextImage}
        />
      )}
      <div className='relative w-full max-w-[48rem]'>
        <div className='absolute left-1/2 top-1/2 flex w-[92%] -translate-x-1/2 -translate-y-1/2 items-center justify-between lg:hidden'>
          <button
            aria-label='previous image'
            onClick={prevImage}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white focus-within:text-primary-orange hover:text-primary-orange md:h-12 md:w-12'>
            <img
              src='./icons/icon-previous.svg'
              alt=''
            />
          </button>
          <button
            aria-label='next image'
            onClick={nextImage}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white focus-within:text-primary-orange hover:text-primary-orange md:h-12 md:w-12'>
            <img
              src='./icons/icon-next.svg'
              alt=''
            />
          </button>
        </div>
        <img
          role='button'
          aria-label='show full size image'
          aria-expanded={displayImage}
          onClick={() => setDisplayImage(true)}
          className={`max-h-[18.75rem] w-full object-cover ${
            image === 2 || image === 3 ? 'object-top' : 'object-center'
          } md:max-h-[25rem] md:min-w-[18.75rem] md:rounded-2xl lg:max-h-full`}
          src={`./images/image-product-${image}.jpg`}
          alt=''
        />
        <ul className='mt-7 hidden items-center justify-between gap-7 lg:flex'>
          <li>
            <button
              aria-label='image 1'
              onClick={() => setImage(1)}
              className={`${
                image === 1 ? 'border-primary-orange' : 'border-white'
              } group box-border overflow-hidden rounded-lg border-2`}>
              <img
                className={`${
                  image === 1 && 'opacity-50'
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
                image === 2 ? 'border-primary-orange' : 'border-white'
              } group box-border overflow-hidden rounded-lg border-2`}>
              <img
                className={`${
                  image === 2 && 'opacity-50'
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
                image === 3 ? 'border-primary-orange' : 'border-white'
              } group box-border overflow-hidden rounded-lg border-2`}>
              <img
                className={`${
                  image === 3 && 'opacity-50'
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
                image === 4 ? 'border-primary-orange' : 'border-white'
              } group box-border overflow-hidden rounded-lg border-2`}>
              <img
                className={`${
                  image === 4 && 'opacity-50'
                } group-focus-within:opacity-50 group-hover:opacity-50`}
                src='./images/image-product-4-thumbnail.jpg'
                alt=''
              />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
