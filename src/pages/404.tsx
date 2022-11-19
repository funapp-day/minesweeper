import { Title } from 'components/common/Title';
import { Error404Screen } from 'components/screens/ErrorScreen/404';
import { CONFIG } from 'config/common';

export const Error404 = () => {
  return (
    <>
      <Title title={CONFIG.PAGE_TITLE.ERROR[404]} />
      <Error404Screen />
    </>
  );
};

export default Error404;
