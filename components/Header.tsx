import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <div className="hover:bg-gray-100 px-3 py-1 rounded-lg">
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
      <div className="w-[45%] flex flex-row space-x-6 mt-5">
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
