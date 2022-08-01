import type { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

interface Props {
  image: string;
  text: string;
  href: string;
}

const ProblemEntry: React.FC<Props> = ({ image, text, href }) => {
  return (
    <>
      <div className="flex flex-row w-full py-1.5 mb-2.5 mt-2.5">
        <div className="ml-1 mt-0.5 my-auto w-[7%]">
          <Image height={30} width={30} src={image} />
        </div>
        <a
          href={href}
          className="font-medium ml-2 md:ml-0 hover:font-thin w-[75%] text-lg md:text-xl md:text-2xl"
        >
          {text}
        </a>
        <a
          href={href}
          className="hidden md:flex h-auto w-[18%] bg-[#303236] hover:bg-[#595959] rounded text-white font-medium text-sm flex flex-col justify-center items-center"
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
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] mb-32">
          <h2 className="mt-8 md:mt-16 font-bold text-3xl md:text-4xl text-[#DF732D]">
            CSES Problem Set
          </h2>
          <p className="mt-5 w-full md:w-4/5 text-sm md:text-base font-light">
            A collection of programming questions that focus on
            algorithms.
          </p>

          <h3 className="mt-12 md:mt-20 font-medium text-2xl md:text-3xl">
            Introductory Problems
          </h3>
          <div className="mt-8">
            <ProblemEntry
              image="/introduction.svg"
              text="Weird Algorithm"
              href="/projects/cses/introductory-problems/weird-algorithm"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Missing Number"
              href="/projects/cses/introductory-problems/missing-number"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Repetitions"
              href="/projects/cses/introductory-problems/repetitions"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Increasing Array"
              href="/projects/cses/introductory-problems/increasing-array"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Permutations"
              href="/projects/cses/introductory-problems/permutations"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Number Spiral"
              href="/projects/cses/introductory-problems/number-spiral"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Two Knights"
              href="/projects/cses/introductory-problems/two-knights"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Two Sets"
              href="/projects/cses/introductory-problems/two-sets"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Bit Strings"
              href="/projects/cses/introductory-problems/bit-strings"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Trailing Zeros"
              href="/projects/cses/introductory-problems/trailing-zeros"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Coin Piles"
              href="/projects/cses/introductory-problems/coin-piles"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Palindrome Reorder"
              href="/projects/cses/introductory-problems/palindrome-reorder"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Gray Code"
              href="/projects/cses/introductory-problems/gray-code"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Tower of Hanoi"
              href="/projects/cses/introductory-problems/tower-of-hanoi"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Creating Strings"
              href="/projects/cses/introductory-problems/creating-string"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Apple Division"
              href="/projects/cses/introductory-problems/apple-division"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Chessboard and Queens"
              href="/projects/cses/introductory-problems/chessboard-and-queens"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Digit Queries"
              href="/projects/cses/introductory-problems/digit-queries"
            />
            <ProblemEntry
              image="/introduction.svg"
              text="Grid Paths"
              href="/projects/cses/introductory-problems/grid-paths"
            />
          </div>

          <h3 className="mt-12 md:mt-20 font-medium text-2xl md:text-3xl">
            Sorting and Searching
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CSES;
