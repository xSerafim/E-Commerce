import { useEffect } from 'react';
import RoutesComponent from './Routes';
import './app.css';

import useLocalStorage from './Hooks';

export default function App() {
  const [setValue] = useLocalStorage();

  useEffect(() => {
    setValue();
  }, [setValue]);

  return (
    <div>
      <RoutesComponent />
    </div>
  );
}
