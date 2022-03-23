import { FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-900 w-screen text-blue-400 p-8 text-center text-2xl'>
      <Link to='/'>
        <FaClipboard className='inline' />
        <span className='ml-4 font-bold align-middle'>Notes App</span>
      </Link>
    </div>
  );
};

export default Header;
