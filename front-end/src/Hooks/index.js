import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { saveItem } from '../Store/Actions/saveItem';

export default function useLocalStorage(key = 'cartItems', initialState = []) {
  const dispatch = useDispatch();

  const newItem = () => {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : initialState;
    } catch (err) {
      console.log(err);
      return initialState;
    }
  };

  const setValue = useCallback(
    (value = []) => {
      try {
        dispatch(saveItem([...value, ...newItem()]));
        localStorage.setItem(key, JSON.stringify([...value, ...newItem()]));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [setValue];
}
