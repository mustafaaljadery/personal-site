import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#FDFDFD] flex flex-col items-center">
      <div className="w-[45%]">
        <div className="flex flex-row space-x-48 my-16">
          <div className="flex flex-col space-y-5">
            <a className="font-regular text-lg hover:font-bold">
              Home
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Projects
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Writing
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Books
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Resume
            </a>
          </div>
          <div className="flex flex-col space-y-5">
            <a className="font-regular text-lg hover:font-bold">
              Linkedin
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Twitter
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Github
            </a>
            <a className="font-regular text-lg hover:font-bold">
              Email
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mb-20">
          <span className="text-lg text-[#737373] font-medium">
            MADE WITH ❤️ BY MUSTAFA ALJADERY.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
