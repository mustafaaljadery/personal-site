import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div className="w-[45%]">
        <div className="flex flex-row space-x-48 my-16">
          <div className="flex flex-col space-y-5">
            <Link href="/">
              <a className="font-regular text-lg hover:font-bold">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="font-regular text-lg hover:font-bold">
                Projects
              </a>
            </Link>
            <Link href="/writing">
              <a className="font-regular text-lg hover:font-bold">
                Writing
              </a>
            </Link>
            <Link href="/books">
              <a className="font-regular text-lg hover:font-bold">
                Books
              </a>
            </Link>
            <Link href="/resume.pdf">
              <a className="font-regular text-lg hover:font-bold">
                Resume
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-5">
            <a
              href="https://www.linkedin.com/in/mustafaaljadery/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-lg hover:font-bold"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/mustafaaljadery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-lg hover:font-bold"
            >
              Twitter
            </a>
            <a
              href="https://github.com/mustafaaljadery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-lg hover:font-bold"
            >
              Github
            </a>
            <a
              href="mailto:aljadery@usc.edu"
              className="font-regular text-lg hover:font-bold"
            >
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
