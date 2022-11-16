import React from 'react';
import { classNames } from 'utils/common';
import { GameField } from './Components/GameField';
import Styles from './index.module.scss';
import { GameBoardProps } from './types';

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  return (
    <div
      className={classNames(
        Styles.GameBoard
      )}
    >
      {
        props.fields && props.fields.map((_, key) => {
          return (
            <GameField
              key={key}
            ></GameField>
          );
        })
      }
    </div>
  );
};
