import type { NextPage } from 'next';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';

const Books: NextPage = () => {
  return (
    <Container title="Books - Mustafa Aljadery">
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-32">
          <h2 className="mt-16 font-bold text-4xl">Book Summaries</h2>
          <p className="mt-5 w-4/5 font-light">
            Lossless compression of the highest quality books. Yes, my
            brain is the solution to the{' '}
            <a
              href="http://prize.hutter1.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-1 hover:font-bold"
            >
              Hutter Prize
            </a>
            .
          </p>
          <p className="mt-12 mb-2 text-xl font-bold">
            Email me book recommendations
          </p>
          <a
            href="mailto:aljadery@usc.edu"
            className="text-lg font-light underline underline-offset-1"
          >
            aljadery[at]usc.edu
          </a>

          <div className="w-3/4 mt-28">
            <p className="text-xl font-light mb-4">Summaries</p>
            <hr />
            <div className="flex flex-row space-x-7 mt-7">
              <div>
                <Image
                  height={180}
                  width={120}
                  src="/zero-to-one.png"
                />
              </div>
              <div className="w-auto">
                <Link href="/books/zero-to-one">
                  <a className="text-2xl font-medium">
                    Zero to One ↗
                  </a>
                </Link>
                <p className="mt-1 font-regular text-[#4A4A4A]">
                  Peter Thiel
                </p>
                <p className="mt-2 w-3/4 font-light">
                  Undoubtedly one of the greatest books on startups,
                  monopolies, and capitalism. A unique method to
                  understand what makes a great business.
                </p>
              </div>
            </div>
          </div>
          <div className="w-3/4 mt-28">
            <p className="text-xl font-light mb-4">In the Making</p>
            <hr />
            <div className="mt-7 flex flex-row space-x-7">
              <div>
                <Image
                  height={180}
                  width={120}
                  src="/system-design-1.png"
                />
              </div>
              <div className="w-auto">
                <Link href="/books/system-design-interview-v1">
                  <a className="text-2xl font-medium">
                    System Design Interview V1 ↗
                  </a>
                </Link>
                <p className="mt-1 font-regular text-[#4A4A4A]">
                  Alex Xu
                </p>
                <p className="mt-2 w-3/4 font-light">
                  An insider guide to system design questions at tech
                  companies. Strategic thinking to approach most
                  questions in a technial interview.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-row space-x-7">
              <div>
                <Image
                  height={170}
                  width={110}
                  src="/system-design-2.png"
                />
              </div>
              <div className="w-auto">
                <Link href="/books/system-design-interview-v2">
                  <a className="text-2xl font-medium">
                    System Design Interview V2 ↗
                  </a>
                </Link>
                <p className="mt-1 font-regular text-[#4A4A4A]">
                  Alex Xu
                </p>
                <p className="mt-2 w-3/4 font-light">
                  The sequel to Alex Xu’s first book on system
                  designs. It’s a step-by-step guide on how to tackle
                  a system design question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Books;
