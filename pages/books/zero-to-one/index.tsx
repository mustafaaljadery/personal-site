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

const ListEntry: React.FC<Props> = ({ href, chapter, title }) => {
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
          <Link href="/books">
            <div className="mt-12 flex flex-row space-x-2">
              <a className="font-regular text-[#575757] hover:font-bold">
                &larr; Other Books
              </a>
              <div className="my-auto mt-0.5">
                <Image src="/book.svg" height={15} width={15} />
              </div>
            </div>
          </Link>
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
          <ListEntry
            href="/"
            chapter="Chapter 1"
            title="Zero to One"
          />
          <ListEntry
            href="/"
            chapter="Chapter 2"
            title="Missing Number"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ZeroToOne;
