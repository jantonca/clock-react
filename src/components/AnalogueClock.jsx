import { useState, useEffect } from 'react';

import './AnalogueClock.css';

const DEGREES_PER_SECOND = 6;

const calculateRotations = (now) => {
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();

  return {
    hour: (currentHour % 12) * 30 + (currentMinute / 2),
    minute: currentMinute * DEGREES_PER_SECOND,
    second: currentSecond * DEGREES_PER_SECOND,
  };
};

const AnalogueClock = () => {
  const [clockRotation, setClockRotation] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateAnalogueClock = () => {
      const now = new Date();
      const rotations = calculateRotations(now);
      setClockRotation(rotations);
    };

    // Update the analogue clock every second
    const intervalId = setInterval(updateAnalogueClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const secondHandStyle = {
    transform: `rotate(${clockRotation.second}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${clockRotation.hour}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${clockRotation.minute}deg)`,
  };

  return (
    <div className="clock-container-analogue">
      <div className="hour-hand">
        <div className="hour-rotation" style={hourHandStyle}></div>
      </div>
      <div className="minute-hand">
        <div className="minute-rotation" style={minuteHandStyle}></div>
      </div>
      <div className="second-hand">
        <div className="second-rotation" style={secondHandStyle}></div>
      </div>
    </div>
  );
};

export default AnalogueClock;
