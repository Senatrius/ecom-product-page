import { ReactNode } from 'react';

export const Button = ({
  click,
  children
}: {
  click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}) => {
  return (
    <button
      onClick={click}
      className='flex grow items-center justify-center gap-3 rounded-md bg-primary-orange py-4 px-5 text-button text-white hover:bg-primary-orange-hover focus:bg-primary-orange-hover'>
      {children}
    </button>
  );
};
