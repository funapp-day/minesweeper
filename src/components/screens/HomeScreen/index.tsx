import { SettingBoard } from 'components/ui/SettingBoard';

import Styles from './index.module.scss';

export const HomeScreen = () => {
  return (
    <div className={Styles.HomeScreen}>
      <SettingBoard />
    </div>
  );
};
