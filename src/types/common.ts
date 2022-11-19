import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { CSSProperties } from 'react';

export interface ComponentProps {
  classNames?: string;
  style?: CSSProperties;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
