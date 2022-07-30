import type { NextPage } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  href: string;
  chapter: string;
  title: string;
}

const ChapterEntry: React.FC<Props> = ({ href, chapter, title }) => {
  return (
    <div className="flex flex-col">
      <p className="mt-3 font-light text-[#818181] text-lg">
        {chapter}
      </p>
      <div className="mb-4 mt-1.5">
        <Link href={href}>
          <a className="font-medium text-2xl hover:underline hover:underline-offset-1">
            {title}
          </a>
        </Link>
      </div>
      <hr />
    </div>
  );
};

const ZeroToOne: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="w-[45%] mb-32">
          <div className="mt-12 flex flex-row space-x-2">
            <Link href="/books">
              <a className="font-regular text-[#575757] hover:font-bold">
                &larr; Other Books
              </a>
            </Link>
            <div className="my-auto mt-0.5">
              <Image src="/book.svg" height={15} width={15} />
            </div>
          </div>
          <h1 className="mt-4 font-bold text-[#7191B7] text-6xl">
            Zero to One
          </h1>
          <div className="flex flex-row space-x-12 mt-8">
            <div className="flex flex-col space-y-1">
              <p className="font-regular text-[#656565]">
                Written By
              </p>
              <p className="font-medium">
                Peter Thiel, Blake Masters
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-regular text-[#656565]">Published</p>
              <p className="font-medium">Crown Business</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
              className="font-regular underline text-lg"
              target="_blank"
              rel="noreferrer noopener"
            >
              Buy Book
            </a>
          </div>
          <p className="mt-16 font-light text-lg w-3/5">
            “When a risk taker writes a book, read it. In the case of
            Peter Thiel, read it twice. Or, to be safe, three times.
            This is a classic.”
          </p>
          <p className="mt-3 font-medium text-xl">
            Nassim Nicholas Taleb
          </p>
          <h2 className="mt-20 text-3xl font-medium text-[#7191B7] mb-4">
            Table of Contents
          </h2>
          <ChapterEntry
            href="/books/zero-to-one/1.the-challenge-of-the-future"
            chapter="Chapter 1"
            title="The Challenge of the Future"
          />
          <ChapterEntry
            href="/books/zero-to-one/2.party-like-its-1999"
            chapter="Chapter 2"
            title="Party Like It's 1999"
          />
          <ChapterEntry
            href="/books/zero-to-one/3.all-happy-companies-are-different"
            chapter="Chapter 3"
            title="All Happy Companies Are Different"
          />
          <ChapterEntry
            href="/books/zero-to-one/4.the-ideology-of-competition"
            chapter="Chapter 4"
            title="The Ideology of Competition"
          />
          <ChapterEntry
            href="/books/zero-to-one/5.last-mover-advantage"
            chapter="Chapter 5"
            title="Last Mover Advantage"
          />
          <ChapterEntry
            href="/books/zero-to-one/6.you-are-not-a-lottery-ticket"
            chapter="Chapter 6"
            title="You Are Not a Lottery Ticket"
          />
          <ChapterEntry
            href="/books/zero-to-one/7.follow-the-money"
            chapter="Chapter 7"
            title="Follow the Money"
          />
          <ChapterEntry
            href="/books/zero-to-one/8.secrets"
            chapter="Chapter 8"
            title="Secrets"
          />
          <ChapterEntry
            href="/books/zero-to-one/9.foundations"
            chapter="Chapter 9"
            title="Foundations"
          />
          <ChapterEntry
            href="/books/zero-to-one/10.the-mechanics-of-mafia"
            chapter="Chapter 10"
            title="The Mechanics of Mafia"
          />
          <ChapterEntry
            href="/books/zero-to-one/11.if-you-build-it-will-they-come"
            chapter="Chapter 11"
            title="If You Build It, Will They Come?"
          />
          <ChapterEntry
            href="/books/zero-to-one/12.man-and-machine"
            chapter="Chapter 12"
            title="Man and Machine"
          />
          <ChapterEntry
            href="/books/zero-to-one/13.seeing-green"
            chapter="Chapter 13"
            title="Seeing Green"
          />
          <ChapterEntry
            href="/books/zero-to-one/14.the-founders-paradox"
            chapter="Chapter 14"
            title="The Founder's Paradox"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ZeroToOne;
