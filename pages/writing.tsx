import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Container from '../components/Container';

const Writing: NextPage = () => {
  return (
    <Container title="Writing - Mustafa Aljadery">
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] mb-24">
          <h2 className="mt-8 md:mt-16 font-bold text-3xl md:text-4xl">
            Findings and Tutorials
          </h2>
          <p className="mt-5 text-sm md:text-base w-full md:w-4/5 font-light">
            These are the things that I randomly stumble upon that
            improve one aspect of my life dramatically.
          </p>
          <div className="flex flex-col items-center mt-10">
            <Image
              height={324}
              width={540}
              src="/coming-soon-white.gif"
            />
          </div>
          <h2 className="mt-20 font-bold text-3xl md:text-4xl">
            Academic Writing
          </h2>
          <p className="mt-5 mb-12 w-full md:w-4/5 text-sm md:text-base font-light">
            Since I’m mostly proficient in Computer Science,
            Mathematics, and Neuroscience, my research stems around
            those areas. If you’re working on something interesting, I
            would love to contribute to it.{' '}
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mustafaaljadery.github.io/#/"
            className="mt-24 text-2xl md:text-3xl text-[#B62D13] font-medium"
          >
            Calculus Textbooks ↗
          </a>
          <p className="mt-3 mb-10 font-light text-[#B62D13] w-full md:w-4/5 text-sm md:text-base">
            Authored three textbooks teaching single variable integral
            and differential calculus, and multivariable calculus.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/speed.pdf"
            className="text-2xl md:text-3xl text-[#301AAB] font-medium"
          >
            Parallel Execution of Smart Contracts on Blockchains
            Without Compromise of Security and Decentralization ↗
          </a>
          <p className="mt-3 mb-10 font-light text-[#301AAB] w-full md:w-4/5 text-sm md:text-base">
            Proposal of an optimization technique on the execution
            layer of smart contracts. Up to 3x speed increase on EVM.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/security.pdf"
            className="text-2xl md:text-3xl text-[#006D3A] font-medium"
          >
            Compiled Analysis on Blockchain Security ↗
          </a>
          <p className="mt-3 font-light text-[#006D3A] w-full md:w-4/5 text-sm md:text-base">
            Identified security challenges in both the infrastructure
            and smart contract layers of a blockchain. Proposed
            solutions and avoidance mechanisms.
          </p>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Writing;
