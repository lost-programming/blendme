import Head from "next/head";

const withHead = (Component: any, title: string, description: string) => {
  const C = (props: any) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>

        <Component {...props} />
      </>
    );
  };

  return C;
};

export default withHead;
