import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <div className="hover:bg-gray-100 px-3 py-1 mr-5 rounded-lg hidden md:flex">
      <Link href={href}>
        <a
          className={
            isActive ? 'font-regular' : 'font-regular text-gray-600'
          }
        >
          {text}
        </a>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="flex flex-col items-center">
      <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] md:flex md:flex-row mt-5">
        <MobileMenu />
        <NavItem href="/" text="Home" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/writing" text="Writing" />
        <NavItem href="/books" text="Books" />
        <NavItem href="/resume.pdf" text="Resume" />
      </div>
    </nav>
  );
};

export default Header;
