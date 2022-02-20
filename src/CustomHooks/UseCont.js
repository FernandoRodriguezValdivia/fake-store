import { useState, useEffect } from 'react';

export default function UseCont() {
  const [temp, setTemp] = useState(
    (() => {
      const num = Math.random();
      if (num < 0.33) return 60;
      if (num < 0.66) return 120;
      return 180;
    })()
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTemp((i) => i - 1);
    }, 1000);
    if (temp <= 0) {
      return clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [temp]);

  return temp;
}
