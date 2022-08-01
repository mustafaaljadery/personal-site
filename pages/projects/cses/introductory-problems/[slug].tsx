import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
const mdxPrism = require('mdx-prism');
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { PostType } from '../../../../types/post';
import {
  postFilePaths,
  POSTS_PATH,
} from '../../../../utils/mdxUtils/cses/introductory-problems';
import Container from '../../../../components/Container';
import styles from '../../../../styles/Book.module.css';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import IntroductoryProblems from '../../../../components/IntroductoryProblems';
import TimeAndMemory from '../../../../components/TimeAndMemory';

const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const Page = ({ source, frontMatter }: PostPageProps) => {
  return (
    <Container
      title={`${frontMatter.title} - Zero to One`}
      description={`${frontMatter.description}`}
      date={frontMatter.date}
      type="article"
    >
      <Header />
      <article className="flex flex-col items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-[45%] mb-20">
          <p className="mt-5 md:mt-12 text-xl md:text-2xl font-light text-[#686868]">
            {frontMatter.chapter}
          </p>
          <h1 className="mt-2 font-light text-3xl md:text-4xl ">
            {frontMatter.title}
          </h1>
          <p className="mt-3 font-light text-[#818181] text-xs md:text-sm mb-12">{`Posted on ${frontMatter.date}`}</p>
          <div className={styles.book}>
            <MDXRemote {...source} components={components} />
          </div>
          <IntroductoryProblems />
        </div>
      </article>
      <Footer />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Page;
