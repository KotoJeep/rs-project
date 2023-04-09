import React from 'react';
import './WithLoader.scss';
import { Loader } from '../Loader';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({ loading, children }) => {
  return (
    <div className="with-loader">
      {children}
      {loading && (
        <div className="with-loader__active">
          <Loader />
        </div>
      )}
    </div>
  );
};
