import Head from 'next/head';
import { useRouter } from 'next/router';

const Container = (props: any) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  // Dont forget to add an image.
  const meta = {
    title:
      'Mustafa Aljadery - Software Engineer, Researcher, Product Designer',
    description: '',
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow,index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mustafaaljadery.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https:mustafaaljadery.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mustafa Aljadery" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mustafaaljadery" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta
            property="article:published_time"
            content={meta.date}
          />
        )}
      </Head>
      {children}
    </div>
  );
};

export default Container;
