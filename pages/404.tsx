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
        <div className="w-[45%] mb-32">
          <h2 className="mt-16 font-bold text-4xl">
            404 - Page is Unavailable
          </h2>
          <p className="mt-5 w-4/5 font-light">
            Unfortunately this page is currently not available. If
            it's something crucial, I encourage you to contact me to
            fix it.
          </p>
          <div className="my-12 flex flex-col items-center">
            <Image width={540} height={324} src="/404.gif" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <Link href="/">
              <div className="bg-[#EAEAEA] py-4 px-16 rounded-lg hover:opacity-75">
                <a className="font-bold">Return Home</a>
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
