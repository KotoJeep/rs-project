import { useState, useEffect } from 'react';
import ky from 'ky';

interface ApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  changeQuery: (url: string) => void;
}

const useApi = <T>(initialUrl = 'products'): ApiState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);

  const fetchData = async (url: string): Promise<T> => {
    const api = ky.create({ prefixUrl: 'https://dummyjson.com/' });
    setIsLoading(true);
    try {
      return await api.get(url).json<T>();
    } catch (error) {
      throw new Error('Failed to fetch.');
    }
  };
  const changeQuery = (url: string): void => {
    setUrl(url);
  };

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [url]);

  return { data, isLoading, error, changeQuery };
};

export default useApi;
