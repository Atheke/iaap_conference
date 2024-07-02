'use client';
import React, { useEffect, useState } from 'react';

const targetDate = new Date('2025-01-03T00:00:00Z'); // Define the target date and time in UTC

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-timer inline-flex gap-5 mx-auto border-2 border-primary px-5 sm:px-20 py-5 text-primary">
      <DisplayDiv duration={timeLeft.days} durationType="Days(s)" />:
      <DisplayDiv duration={timeLeft.hours} durationType="Hour(s)" />:
      <DisplayDiv duration={timeLeft.minutes} durationType="Minute(s)" />:
      <DisplayDiv duration={timeLeft.seconds} durationType="Second(s)" />
    </div>
  );
};

export default CountdownTimer;

const DisplayDiv = ({ duration, durationType }: any) => {
  return (
    <div className="text-xl sm:text-3xl flex flex-col items-center justify-center">
      <span>{duration}</span>
      <span className="text-xs sm:text-base">{durationType}</span>
    </div>
  );
};
