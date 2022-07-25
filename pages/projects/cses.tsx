import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

interface Props {
  image: string;
  text: string;
  href: string;
}

const ListEntry: React.FC<Props> = ({ image, text, href }) => {
  return (
    <>
      <div className="flex flex-row w-full py-1.5 mb-2.5 mt-2.5">
        <div className="ml-1 mt-0.5 my-auto w-[7%]">
          <Image height={30} width={30} src={image} />
        </div>
        <a
          href={href}
          className="font-medium hover:font-thin w-[75%] text-2xl"
        >
          {text}
        </a>
        <a
          href={href}
          className="h-auto w-[18%] bg-[#303236] hover:bg-[#595959] rounded text-white font-medium text-sm flex flex-col justify-center items-center"
        >
          View Solution
        </a>
      </div>
      <hr />
    </>
  );
};

const CSES: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-32">
          <h2 className="mt-16 font-bold text-4xl text-[#DF732D]">
            CSES Problem Set
          </h2>
          <p className="mt-5 w-4/5 font-light">
            A collection of programming questions that focus on
            algorithms.
          </p>

          <h3 className="mt-20 font-medium text-3xl">
            Introductory Problems
          </h3>
          <div className="mt-8">
            <ListEntry
              image="/introduction.svg"
              text="Weird Algorithm"
              href="/writing/cses/weird-algorithm"
            />
            <ListEntry
              image="/introduction.svg"
              text="Mising Number"
              href="/writing/cses/missing-number"
            />
          </div>

          <h3 className="mt-20 font-medium text-3xl">
            Sorting and Searching
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CSES;
