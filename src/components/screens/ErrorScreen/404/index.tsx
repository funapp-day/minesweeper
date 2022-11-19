import LottieFile from 'assets/lottie/404.json';
import { useMemo } from 'react';
import Lottie, { Options } from 'react-lottie';
import { classNames } from 'utils/common';

import Styles from './index.module.scss';
import { Error404ScreenProps } from './types';

export const Error404Screen: React.FC<Error404ScreenProps> = (props) => {
  const options = useMemo<Options>(() => ({
    animationData: LottieFile,
    loop: true,
    autoplay: true,
  }), []);

  return (
    <div
      className={classNames(
        props.classNames,
        Styles.Error404
      )}
      style={props.style}
    >
      <div className={Styles.Wrapper}>
        <div className={Styles.Content}>
          <Lottie
            options={options}
            width={820}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
    </div>
  );
};
