import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { saveItem } from '../Store/Actions/saveItem';
import subQuantityOfItems from '../Utils/Functions/subQuantityOfItem';
import sumQuantityOfItems from '../Utils/Functions/sumQuantityOfItems';

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
    (value = [], isSum = true) => {
      try {
        if (isSum) {
          const itemsWithQuantity = sumQuantityOfItems(value, newItem());
          dispatch(saveItem(itemsWithQuantity));
          localStorage.setItem(key, JSON.stringify(itemsWithQuantity));
        } else {
          const itemsWithQuantity = subQuantityOfItems(value, newItem());
          dispatch(saveItem(itemsWithQuantity));
          localStorage.setItem(key, JSON.stringify(itemsWithQuantity));
        }
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [setValue];
}
