import Head from "next/head";

const withHead = (Component: any, title: string, description: string) => {
  const C = (props: any) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description ? description : "원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요."} />
          {/* OG 태그 */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:title" content={ title ? title : "BlendMe" } />
          <meta property="og:description" content="원하는 원두의 정보를 확인하고 자신만의 블렌딩을 해보세요." />
        </Head>

        <Component {...props} />
      </>
    );
  };

  return C;
};

export default withHead;
