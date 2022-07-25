import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex flex-col items-center">
      <div className="w-[45%] flex flex-row space-x-6 mt-5">
        <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
          <Link href="/">
            <a className="font-regular">Home</a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
          <Link href="/projects">
            <a className="font-regular">Projects</a>
          </Link>
        </div>

        <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
          <Link href="/writing">
            <a className="font-regular">Writing</a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
          <Link href="/books">
            <a className="font-regular">Books</a>
          </Link>
        </div>
        <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
          <Link href="/resume.pdf">
            <a className="font-regular">Resume</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
