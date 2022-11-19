import React from 'react';

import { GameFieldProps } from './types';

export const GameField: React.FC<GameFieldProps> = (props) => {
  return (
    <div
      className="GameField"
      onClick={props.onClick}
      onContextMenu={(event) => {
        // Right Click
        event.preventDefault();

        props.onRightClick && props.onRightClick(event);
      }}
    />
  );
};
