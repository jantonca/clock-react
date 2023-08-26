import { useState, useEffect } from 'react';
import './DigitalClock.css';

const UPDATE_INTERVAL = 1000; // 1 second

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState('');

  const updateDigitalClock = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateDigitalClock, UPDATE_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock-container-digital">{currentTime}</div>;
};

export default DigitalClock;