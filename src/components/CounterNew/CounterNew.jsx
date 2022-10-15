import { useState, useEffect } from 'react';
import styles from './CounterNew.module.css';

export function CounterNew() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    
    const totalClicks = counterA + counterB;
    console.log(totalClicks);
    // document.title = `Clicked ${totalClicks}`;
  }, [counterA, counterB]);
  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={() => setCounterA(state => state + 1)}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => setCounterB(state => state + 1)}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
