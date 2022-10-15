import { useState, useEffect, useRef } from 'react';
// import { Component } from 'react';
import './Clock.scss';

export const NewClock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop()
    };
  }, []);

  const stop = () => {
    console.log(intervalId.current);
    clearInterval(intervalId.current);
  };

  return (
    <>
      <div className="Clock__face">{time.toLocaleTimeString()}</div>
      <button type="button" className="clockBtn" onClick={stop} ref={buttonRef}>
        Stop
      </button>
    </>
  );
};

// export class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };
//   intervalID = null;

//   componentDidMount() {
//     this.intervalID = setInterval(() =>
//       this.setState({ time: new Date().toLocaleTimeString() })
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
//   render() {
//     return <div className="Clock__face">{this.state.time}</div>;
//   }
// }
