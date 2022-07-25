import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

const Writing: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-24">
          <h2 className="mt-16 font-bold text-4xl">
            Findings and Tutorials
          </h2>
          <p className="mt-5 w-4/5 font-light">
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
          <h2 className="mt-20 font-bold text-4xl">
            Academic Writing
          </h2>
          <p className="mt-5 mb-12 w-4/5 font-light">
            Since I’m mostly proficient in Computer Science,
            Mathematics, and Neuroscience, my research stems around
            those areas. If you’re working on something interesting, I
            would love to contribute to it.{' '}
          </p>
          <a className="mt-24 text-3xl text-[#B62D13] font-medium">
            Calculus Textbooks ↗
          </a>
          <p className="mt-3 mb-10 font-light text-[#B62D13] w-4/5">
            Authored three textbooks teaching single variable integral
            and differential calculus, and multivariable calculus.
          </p>
          <a className="text-3xl text-[#301AAB] font-medium">
            Parallel Execution of Smart Contracts on Blockchains
            Without Compromise of Security and Decentralization ↗
          </a>
          <p className="mt-3 mb-10 font-light text-[#301AAB] w-4/5">
            Proposal of an optimization technique on the execution
            layer of smart contracts. Up to 3x speed increase on EVM.
          </p>
          <a className="text-3xl text-[#006D3A] font-medium w-4/5">
            Compiled Analysis on Blockchain Security ↗
          </a>
          <p className="mt-3 font-light text-[#006D3A] w-4/5">
            Identified security challenges in both the infrastructure
            and smart contract layers of a blockchain. Proposed
            solutions and avoidance mechanisms.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Writing;
