import { Error404Screen } from 'components/screens/ErrorScreen/404';
import { CONFIG } from 'config/common';
import Head from 'next/head';

export const Error404 = () => {
  return (
    <>
      <Head>
        <title key={'title'}>
          { `${CONFIG.GAME_NAME} :: ${CONFIG.PAGE_TITLE.ERROR[404]}` }
        </title>
      </Head>
      <Error404Screen />
    </>
  );
};

export default Error404;
