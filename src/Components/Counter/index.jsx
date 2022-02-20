import { useContext } from 'react';
import CountContex from '../../Context/CountContex';

function Counter() {
  const contador = useContext(CountContex);
  const minuto = Math.floor(contador / 60);
  const segundo = contador % 60;
  return (
    <div>
      {minuto}:{segundo < 10 ? `0${segundo}` : `${segundo}`}
    </div>
  );
}

export default Counter;
