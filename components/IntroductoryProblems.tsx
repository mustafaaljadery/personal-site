import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

const ProblemEntry: React.FC<Props> = ({ text, href }) => {
  return (
    <li className="ml-[20px] font-regular hover:font-bold text-[#DF732D] text-lg mt-2">
      <Link href={href}>{text}</Link>
    </li>
  );
};

const IntroductoryProblems = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-medium">Introductory Problems</h3>
      <ul className="list-disc mt-6">
        <ProblemEntry
          text="Weird Algorithm"
          href="/projects/cses/introductory-problems/weird-algorithm"
        />
        <ProblemEntry
          text="Missing Number"
          href="/projects/cses/introductory-problems/missing-number"
        />
        <ProblemEntry
          text="Repetitions"
          href="/projects/cses/introductory-problems/repetitions"
        />
        <ProblemEntry
          text="Increasing Array"
          href="/projects/cses/introductory-problems/increasing-array"
        />
        <ProblemEntry
          text="Permutations"
          href="/projects/cses/introductory-problems/permutations"
        />
        <ProblemEntry
          text="Number Spiral"
          href="/projects/cses/introductory-problems/number-spiral"
        />
        <ProblemEntry
          text="Two Knights"
          href="/projects/cses/introductory-problems/two-knights"
        />
        <ProblemEntry
          text="Two Sets"
          href="/projects/cses/introductory-problems/two-sets"
        />
        <ProblemEntry
          text="Bit Strings"
          href="/projects/cses/introductory-problems/bit-strings"
        />
        <ProblemEntry
          text="Trailing Zeros"
          href="/projects/cses/introductory-problems/trailing-zeros"
        />
        <ProblemEntry
          text="Coin Piles"
          href="/projects/cses/introductory-problems/coin-piles"
        />
        <ProblemEntry
          text="Palindrome Reorder"
          href="/projects/cses/introductory-problems/palindrome-reorder"
        />
        <ProblemEntry
          text="Gray Code"
          href="/projects/cses/introductory-problems/gray-code"
        />
        <ProblemEntry
          text="Tower of Hanoi"
          href="/projects/cses/introductory-problems/tower-of-hanoi"
        />
        <ProblemEntry
          text="Creating Strings"
          href="/projects/cses/introductory-problems/creating-string"
        />
        <ProblemEntry
          text="Apple Division"
          href="/projects/cses/introductory-problems/apple-division"
        />
        <ProblemEntry
          text="Chessboard and Queens"
          href="/projects/cses/introductory-problems/chessboard-and-queens"
        />
        <ProblemEntry
          text="Digit Queries"
          href="/projects/cses/introductory-problems/digit-queries"
        />
        <ProblemEntry
          text="Grid Paths"
          href="/projects/cses/introductory-problems/grid-paths"
        />
      </ul>
    </div>
  );
};

export default IntroductoryProblems;
