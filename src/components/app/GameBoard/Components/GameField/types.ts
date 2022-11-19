import React from 'react';

export interface GameFieldProps {
  status?: number;
  onClick?: React.MouseEventHandler;
  onRightClick: React.MouseEventHandler;
};
