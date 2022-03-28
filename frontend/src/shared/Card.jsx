const Card = ({ children }) => {
  return (
    <div className='container mx-auto bg-white my-4 p-8 rounded-xl shadow bg-gray-100 relative'>
      {children}
    </div>
  );
};

export default Card;
