import { HomeScreen } from 'components/screens/HomeScreen';
import { CONFIG } from 'config/common';
import Head from 'next/head';

export const Home = () => {
  return (
    <>
      <Head>
        <title key={'title'}>
          { `${CONFIG.GAME_NAME} :: ${CONFIG.PAGE_TITLE.HOME}` }
        </title>
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
