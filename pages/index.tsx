import type { NextPage } from 'next';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';
import Container from '../components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-28">
          <div className="flex flex-row w-full">
            <div className="w-3/5">
              <h1 className="mt-16 text-5xl font-bold">
                Mustafa Aljadery
              </h1>
              <h2 className="mt-3 text-lg font-regular text-[#585858]">
                Software Engineering, Research, Product Design
              </h2>
              <p className="mt-5 font-light text-sm">
                My main interests are around radical transformational
                technologies. I approach tasks with the rigor of
                academic research and the ambition of a startup.
              </p>
            </div>
            <div className="w-2/5 mt-12 flex flex-row justify-end items-center">
              <Image height={110} width={110} src="/mustafa.png" />
            </div>
          </div>
          <div className="mt-20">
            <h2 className="font-bold text-3xl">
              Open-Source Projects
            </h2>
            <div className="flex flex-col items-center mt-14">
              <Image
                src="/coming-soon-red.gif"
                height={324}
                width={540}
              />
            </div>
          </div>
          <div className="mt-20">
            <h2 className="font-bold text-3xl">Book Summaries</h2>
            <div className="flex flex-col space-y-3 mb-7">
              <div className="flex flex-row w-full mt-8 mb-1.5">
                <p className="font-thin w-[7%] text-2xl my-auto">
                  01
                </p>
                <Link href="/books/zero-to-one">
                  <a className="font-medium w-[75%] text-2xl hover:py-0.5">
                    Zero to One ↗
                  </a>
                </Link>
                <a
                  href="/books/zero-to-one"
                  className="h-auto w-[18%] bg-[#595959] rounded text-white font-medium text-sm flex flex-col justify-center items-center hover:opacity-75"
                >
                  View Summary
                </a>
              </div>
              <hr />
            </div>
            <Link href="/books">
              <a className="font-light hover:font-bold">
                View all Book Summaries &rarr;
              </a>
            </Link>
          </div>
          <div className="mt-20">
            <h2 className="font-bold text-3xl">Academic Writing</h2>
            <div className="flex flex-col space-y-3 mb-7">
              <div className="flex flex-row w-full mt-8 mb-1.5">
                <p className="font-thin w-[7%] text-2xl my-auto">
                  01
                </p>
                <a
                  href="https://mustafaaljadery.github.io/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium w-[93%] text-2xl hover:py-0.5"
                >
                  Calculus Textbooks ↗
                </a>
              </div>
              <hr />
              <div className="flex flex-row w-full py-1.5">
                <p className="font-thin w-[7%] text-2xl my-auto">
                  02
                </p>
                <a
                  target="_blank"
                  href="/speed.pdf"
                  rel="noopener noreferrer"
                  className="font-medium w-[93%] text-2xl hover:py-0.5"
                >
                  Smart Contract Parallel Execution ↗
                </a>
              </div>
              <hr />
              <div className="flex flex-row w-full py-1.5">
                <p className="font-thin w-[7%] text-2xl my-auto">
                  03
                </p>
                <a
                  href="/security.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium w-[93%] text-2xl hover:py-0.5"
                >
                  Analysis of Blockchain Security ↗
                </a>
              </div>
              <hr />
            </div>
            <Link href="/writing">
              <a className="font-light hover:font-bold">
                View all Writing &rarr;
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
