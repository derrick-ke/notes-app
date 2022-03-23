const Card = ({ children }) => {
  return (
    <div className='container mx-auto bg-white my-4 p-8 rounded-xl'>
      {children}
    </div>
  );
};

export default Card;
