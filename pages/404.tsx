import type { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-32">
          <h2 className="mt-16 font-bold text-4xl">
            There was an Error
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
