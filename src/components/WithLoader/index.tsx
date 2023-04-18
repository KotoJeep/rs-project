import React from 'react';
import './WithLoader.scss';
import { Loader, LoaderSize } from '../Loader';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  size?: LoaderSize;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({ loading, size, children }) => {
  return (
    <div className="with-loader">
      {children}
      {loading && (
        <div className="with-loader__active">
          <Loader size={size} />
        </div>
      )}
    </div>
  );
};
