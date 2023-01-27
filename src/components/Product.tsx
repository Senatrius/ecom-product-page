export const Product = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='mx-auto flex flex-col pb-[5.5rem] md:w-[77.1%] md:pt-16 md:pb-[8.4375rem] lg:w-[70.4%] lg:flex-row lg:gap-16 lg:pt-[5.625rem] xl:gap-32'>
      {children}
    </main>
  );
};
