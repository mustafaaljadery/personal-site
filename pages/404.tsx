import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/Container';

const Error: NextPage = () => {
  return (
    <Container title="404 - Mustafa Aljadery">
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] mb-32">
          <h2 className="mt-8 md:mt-16 font-bold text-3xl md:text-4xl">
            404 - Page is Unavailable
          </h2>
          <p className="mt-5 w-full md:w-4/5 text-sm md:text-base font-light">
            Unfortunately this page is currently not available. If
            it&apos;s something crucial, I encourage you to contact me
            to fix it.
          </p>
          <div className="my-12 flex flex-col items-center">
            <Image width={540} height={324} src="/404.gif" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <Link href="/">
              <div className="bg-[#EAEAEA] py-4 px-16 rounded-lg hover:opacity-75">
                <a className="font-bold text-sm md:text-base">
                  Return Home
                </a>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Error;
