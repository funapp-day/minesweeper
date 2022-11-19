import { ComponentProps } from 'types/common';

export interface ErrorScreenProps extends ComponentProps {
  code?: number;
  errorMessage?: string;
};
