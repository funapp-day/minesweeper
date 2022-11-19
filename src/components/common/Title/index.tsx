import { CONFIG } from 'config/common';
import Head from 'next/head';

import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <Head>
      <title key={'title'}>
        {
          props.title ?
            `${CONFIG.GAME_NAME} :: ${props.title}` :
            `${CONFIG.GAME_NAME}`
        }
      </title>
    </Head>
  );
};
