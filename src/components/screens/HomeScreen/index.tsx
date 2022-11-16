import { GameBoard } from 'components/app/GameBoard';
import Styles from './index.module.scss';

export const HomeScreen = () => {
  return (
    <div className={Styles.HomeScreen}>
      <GameBoard></GameBoard>
    </div>
  );
};
