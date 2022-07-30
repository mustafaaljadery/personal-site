import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

const ChapterEntry: React.FC<Props> = ({ text, href }) => {
  return (
    <li className="ml-[20px] font-regular hover:font-bold text-[#7191B7] text-lg mt-2">
      <Link href={href}>{text}</Link>
    </li>
  );
};

const ZeroToOneChapters = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-medium">Continue Reading</h3>
      <ul className="list-disc mt-6">
        <ChapterEntry
          href="/books/zero-to-one/1.the-challenge-of-the-future"
          text="Ch 1: The Challenge of the Future"
        />
        <ChapterEntry
          href="/books/zero-to-one/2.party-like-its-1999"
          text="Ch 2: Party Like It's 1999"
        />
        <ChapterEntry
          href="/books/zero-to-one/3.all-happy-companies-are-different"
          text="Ch 3: All Happy Companies Are Different"
        />
        <ChapterEntry
          href="/books/zero-to-one/4.the-ideology-of-competition"
          text="Ch 4: The Ideology of Competition"
        />
        <ChapterEntry
          href="/books/zero-to-one/5.last-mover-advantage"
          text="Ch 5: Last Mover Advantage"
        />
        <ChapterEntry
          href="/books/zero-to-one/6.you-are-not-a-lottery-ticket"
          text="Ch 6: You Are Not a Lottery Ticket"
        />
        <ChapterEntry
          href="/books/zero-to-one/7.follow-the-money"
          text="Ch 7: Follow the Money"
        />
        <ChapterEntry
          href="/books/zero-to-one/8.secrets"
          text="Ch 8: Secrets"
        />
        <ChapterEntry
          href="/books/zero-to-one/9.foundations"
          text="Ch 9: Foundations"
        />
        <ChapterEntry
          href="/books/zero-to-one/10.the-mechanics-of-mafia"
          text="Ch 10: The Mechanics of Mafia"
        />
        <ChapterEntry
          href="/books/zero-to-one/11.if-you-build-it-will-they-come"
          text="Ch 11: If You Build It, Will They Come?"
        />
        <ChapterEntry
          href="/books/zero-to-one/12.man-and-machine"
          text="Ch 12: Man and Machine"
        />
        <ChapterEntry
          href="/books/zero-to-one/13.seeing-green"
          text="Ch 13: Seeing Green"
        />
        <ChapterEntry
          href="/books/zero-to-one/14.the-founders-paradox"
          text="Ch 14: The Founder's Paradox"
        />
      </ul>
      <p className="font-light text-lg mt-12">
        Zero to One was orginally written by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Peter_Thiel"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-1 hover:font-bold"
        >
          Peter Thiel
        </a>{' '}
        and{' '}
        <a
          href="https://en.wikipedia.org/wiki/Blake_Masters_(political_candidate)"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-1 hover:font-bold"
        >
          Blake Masters
        </a>
        . The chapter is summarized by{' '}
        <a
          className="underline underline-offset-1 hover:font-bold"
          href="https://www.mustafaaljadery.com/"
        >
          Mustafa Aljadery
        </a>
      </p>
    </div>
  );
};

export default ZeroToOneChapters;
