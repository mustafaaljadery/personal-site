import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';

const Projects: NextPage = () => {
  return (
    <Container title="Projects - Mustafa Aljadery">
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] mb-32">
          <h2 className="mt-8 md:mt-16 font-bold text-3xl md:text-4xl">
            Open-Source Projects
          </h2>
          <p className="mt-5 md:w-4/5 font-light text-sm md:text-base">
            Building software to me is about solving problems. If
            there is a problem I’m facing with no solution or an
            antique solution, I will solve it.{' '}
          </p>
          <div className="flex flex-col items-center mt-10">
            <Image height={324} width={540} src="/coming-zoom.gif" />
          </div>
          <h2 className="mt-12 md:mt-20 font-bold text-3xl md:text-4xl">
            Graphical Solutions to CS Problems
          </h2>
          <p className="mt-5 mb-12 text-sm md:text-base w-full md:w-4/5 font-light">
            I solve and explain programming problems in the simplest
            form possible.
          </p>
          <Link href="/projects/cses">
            <a className="text-2xl md:text-3xl text-[#DF732D] font-medium">
              CSES Problem Set ↗
            </a>
          </Link>
          <p className="mt-2 font-light text-sm md:text-base">
            A collection of programming questions that focus on
            algorithms.
          </p>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Projects;
