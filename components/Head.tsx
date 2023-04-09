import Head from 'next/head';
export function HeadComponent({title, description}: any) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='robots' content='index, follow' />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="City, Cyclery, Bikes, Windsor, Repair" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
