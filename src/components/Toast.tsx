export const Toast = ({ message }: { message: string }) => {
  return (
    <div className='fixed right-[2%] top-0 z-50 mt-2 w-[96%] max-w-[30rem] overflow-hidden rounded-lg bg-white shadow-xl lg:right-[6.25%]'>
      <div className='absolute top-0 h-1 w-full bg-primary-orange'></div>
      <p className='m-6'>{message}</p>
    </div>
  );
};
