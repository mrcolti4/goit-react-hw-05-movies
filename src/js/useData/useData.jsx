import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useData = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFecthing] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getData = useCallback(async requestFunction => {
    setIsFecthing(true);
    try {
      const data = await requestFunction;
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFecthing(false);
    }
  }, []);

  return { data, isFetching, error, getData };
};
