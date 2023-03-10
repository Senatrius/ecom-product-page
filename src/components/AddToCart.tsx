import { useContext, useState, useRef } from 'react';
import { CartContext } from '../App';
import { Button } from './Button';
import { Toast } from './Toast';

export const AddToCart = () => {
  const timerRef = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);
  const [isNotificationVisible, setIsNotificationVisible] =
    useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<number>(1);
  const { products, setProducts } = useContext(CartContext);

  const increaseProduct = () => {
    setSelectedProducts(selectedProducts + 1);
  };

  const decreaseProduct = () => {
    if (selectedProducts > 1) {
      setSelectedProducts(selectedProducts - 1);
    }
  };

  const showNotification = () => {
    setIsNotificationVisible(true);

    timerRef.current = window.setTimeout(() => {
      setIsNotificationVisible(false);
    }, 5000);
  };

  const addToCart = () => {
    clearTimeout(timerRef.current);
    showNotification();

    setProducts(products + selectedProducts);
    setSelectedProducts(1);
  };

  return (
    <>
      {isNotificationVisible && <Toast message='New items added to cart.' />}
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='flex items-center rounded-md bg-secondary-control'>
          <button
            aria-label='remove 1 from product count'
            onClick={decreaseProduct}
            className='p-4 text-primary-orange hover:text-primary-orange-hover focus:text-primary-orange-hover'>
            <svg
              width='12'
              height='4'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z'
                fill='currentColor'
              />
            </svg>
          </button>
          <input
            aria-live='polite'
            aria-label='product count to add to cart'
            type='number'
            className='min-w-0 grow bg-secondary-control p-4 text-center text-discount-unit text-primary-text'
            value={selectedProducts || 1}
            max={100}
            min={1}
            size={1}
            onChange={e =>
              setSelectedProducts(parseInt(e.currentTarget.value))
            }></input>
          <button
            aria-label='add 1 to product count'
            onClick={increaseProduct}
            className='p-4 text-primary-orange hover:text-primary-orange-hover focus:text-primary-orange-hover'>
            <svg
              width='12'
              height='12'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
        <Button click={addToCart}>
          <svg
            width='22'
            height='20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='#FFF'
              fillRule='nonzero'
            />
          </svg>
          Add to cart
        </Button>
      </div>
    </>
  );
};
