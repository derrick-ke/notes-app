const Card = ({ children }) => {
  return (
    <div className='mx-auto bg-white my-4 px-8 py-12 rounded-xl shadow relative w-full lg:w-1/2 xl:w-1/2'>
      {children}
    </div>
  );
};

export default Card;
