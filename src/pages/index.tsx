import { Title } from 'components/common/Title';
import { HomeScreen } from 'components/screens/HomeScreen';
import { CONFIG } from 'config/common';

export const Home = () => {
  return (
    <>
      <Title
        title={CONFIG.PAGE_TITLE.HOME}
      />
      <HomeScreen />
    </>
  );
};

export default Home;
